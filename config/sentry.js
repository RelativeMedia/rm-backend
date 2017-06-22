const pkg = require('../package.json');
module.exports.sentry = {
  active: false,
  dsn: '{{ DNS }}',
  options: {
    logger: 'default',
    release: pkg.version,
    environment: 'production'
  }
}
