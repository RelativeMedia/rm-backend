module.exports.services = {
  cipher: {
    jwt: {
      secretKey: 'CHANGEME'
    }
  },
  hash: {
    bcrypt: {}
  },
  image: {},
  mailer: {
    from: 'no-reply@changeme.com',
    to: 'someone@changeme.com',
    provider: {
      auth: {
        api_user: 'CHANGEME',
        api_key: 'CHANGEME'
      }
    }
  },
  storage: {}
}
