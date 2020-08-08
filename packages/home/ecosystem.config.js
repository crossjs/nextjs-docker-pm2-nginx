module.exports = {
  apps : [{
    name: "home",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
