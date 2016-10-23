var should = require('chai').should();

const newEmail = {
  firstName: "Test",
  lastName: "123",
  email: "mike@relative.media",
  phoneNumber: "480-111-1234",
  message: "Test Message",
  subject: "Test Subject"
};

describe.only('models:Email', () => {
  it('Should create a new email enty', (done) => {
    Email
    .create(newEmail)
    .then((email) => {
      email.should.have.keys(
        'firstName',
        'lastName',
        'email',
        'phoneNumber',
        'message',
        'createdAt',
        'updatedAt',
        'subject',
        'status',
        'id'
      );
      done();
    })
    .catch(done);
  });
  it('Should update an email status to success', (done) => {
    Email
    .update({ id: newEmail.id }, { status: 'success' })
    .then((email) => {
      email.should.exist;
      done();
    })
    .catch(done);
  });
});
