"use strict";

/**
 * EmailController
 * @description :: Server-side logic for ...
 */

module.exports = {
  send(req, res) {
    const contact = req.body;
    const ipAddress = req.headers['x-forwarder-for'] || (req.connection && req.connection.remoteAddress);

    sails.log.debug(contact);

    Email
    .find({ ipAddress: ipAddress })
    .then((email) => {
      return Email
      .create({
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phoneNumber: contact.phoneNumber,
        message: contact.message,
        subject: contact.subject,
        ipAddress: ipAddress
      })
      .then((email) => {
        return email;
      })
    })
    .then((email) => {

      const subject = () => {
        return (sails.config.services.mailer.subjectPrepend)
          ? sails.config.services.mailer.subject + ' | ' + email.subject
          : email.subject || sails.config.services.mailer.subject
      }

      return MailerService()
        .send({
          to: sails.config.services.mailer.to,
          subject: subject(),
          text: contact.message
        })
        .then((status) => {
          return Email.update({ id: email.id }, { status: status.message })
        })
    })
    .then((email) => {
      sails.log.debug(email);
      return res.ok(email);
    })
    .catch((err) => {
      sails.log.error(err);
      return res.negotiate(err)
    });
  }
};
