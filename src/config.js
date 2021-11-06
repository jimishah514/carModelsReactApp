/** @format */

const { checkBaseDomain } = require('./utils/checkBaseDomain')

const env = process.env.NODE_ENV || 'development'

const host = window.location.hostname

const config = {
  development: {
    apiPath: checkBaseDomain(host),
    domain: 'test.org',
  },
  production: {
    apiPath: checkBaseDomain(host),
    domain: 'production.test.org',
  },
}
module.exports = config[env]
