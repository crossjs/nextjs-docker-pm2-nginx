module.exports = {
  apps : [{
    name: "blog",
    script: "./server.js",
    env: {
      NODE_ENV: "development",
      PORT: 3001
    },
    env_production: {
      NODE_ENV: "production",
      PORT: 3001
    }
  }]
}
