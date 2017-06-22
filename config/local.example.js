const pkg = require('../package.json');
module.exports = {
  services: {
    cipher: {
      jwt: {
        secretKey: 'CHANGEME'
      }
    },
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
    hash: {
      bcrypt: {}
    },
    image: {},
    storage: {}
  },
  sentry: {
    active: false,
    dsn: '{{ DNS }}',
    options: {
      logger: 'default',
      release: pkg.version,
      environment: 'production'
    }
  }
}
