"use strict";

/**
 * EmailController
 * @description :: Server-side logic for ...
 */

module.exports = {
  send(req, res) {
    const contact = req.body;
    const ipAddress = req.headers['x-forwarder-for'] || (req.connection && req.connection.remoteAddress);

    Email
    .find({ ipAddress: ipAddress })
    .then((email) => {

      if (email.length >= 5) {
        sails.log.error('User IP has requested to contact too many times', email);
        return res.badRequest();
      } else {
        Email
        .create({
          firstName: contact.firstName,
          lastName: contact.lastName,
          'email': contact.email,
          'phoneNumber': contact.phoneNumber,
          'message': contact.message,
          'subject': contact.subject,
          'ipAddress': ipAddress
        })
        .then((email) => {
          res.ok();
          return email;
        })
        .then((email) => {
          MailerService
          .send({
            to: sails.config.services.mailer.to,
            text: contact.message
          })
          .then((status) => {

            Email
            .update({ id: email.id }, { status: status.message })
            .catch((err) => {
              sails.log.error(err);
            });

          })
          .catch((err) => {
            sails.log.error(err);
            return res.negotiate(err);
          });
        })
        .catch((err) => {
          sails.log.error(err);
          return res.negotiate(err);
        });
      }
    });
  }
};
