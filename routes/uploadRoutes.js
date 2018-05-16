// Image uploading in AWS S3 bucket
const AWS = require("aws-sdk")
const uuid = require("uuid")

const requireLogin = require("../middlewares/requireLogin")
const { accessKeyId, secretAccessKey } = require("../config/keys")

const s3 = new AWS.S3({
  accessKeyId,
  secretAccessKey,
  signatureVersion: "v4",
  region: "ap-south-1"
})

// uploading files
module.exports = app => {
  app.get("/api/upload", requireLogin, (req, res) => {
    const key = `${req.user.id}/${uuid()}`

    // for uploading use option "putObject"
    s3.getSignedUrl(
      "putObject",
      {
        Bucket: "blogster-123",
        ContentType: "image/png",
        Key: key
      },
      (err, url) => res.send({ key, url })
    )
  })
}
