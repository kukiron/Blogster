module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  mongoURI: "mongodb://127.0.0.1:27017/blogster_nodeci",
  redisUrl: "redis://127.0.0.1:6379",
  cookieKey: "abc123xyz",
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
}
