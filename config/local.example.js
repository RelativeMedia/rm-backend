const pkg = require('../package.json');
module.exports = {
  cors: {
    origin: 'https://relative.media',
  },
  services: {
    cipher: {
      jwt: {
        secretKey: 'CHANGEME'
      }
    },
    mailer: {
      from: 'no-reply@changeme.com',
      to: 'someone@changeme.com',
      subject: '[DEV] Some Subject Prepended',
      subjectPrepend: true,
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
