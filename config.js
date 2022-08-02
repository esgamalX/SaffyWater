const configs = {
  dev: {
    API_URL: '/Saffy',
  },

  production: {
    API_URL: 'https://ahmedjamaal.github.io/Saffy',
  }
}

const nodeEnv = process.env.NODE_ENV
module.exports = configs[nodeEnv]
