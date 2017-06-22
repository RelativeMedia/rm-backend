const pkg = require('../package.json');
module.exports = {
  services: {
    cipher: {
      jwt: {
        secretKey: 'CHANGEME'
      }
    },
    mailer: {},
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
