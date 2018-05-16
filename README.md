# Blogster_NodeCI

[![Build Status](https://travis-ci.org/kukiron/Blogster_NodeCI.svg?branch=master)](https://travis-ci.org/kukiron/Blogster_NodeCI) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/38aa640fc68344278902c721d5775fef)](https://www.codacy.com/app/kukiron/Blogster_NodeCI?utm_source=github.com&utm_medium=referral&utm_content=kukiron/Blogster_NodeCI&utm_campaign=Badge_Grade) [![Maintainability](https://api.codeclimate.com/v1/badges/0943ce7b83cb59f8bbd2/maintainability)](https://codeclimate.com/github/kukiron/Blogster_NodeCI/maintainability) [![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)

Blog application with cache implementation & integration tests. AWS S3 service is used for file uploading.
Technologies used -

* Node.js
* MongoDB (Mongoose)
* Create React App
* Redux & React-router
* Redis
* Integration testing (with Jest & Puppeteer)
* AWS S3

## Getting started

Clone the repo & install dependencies. To install the server-side dependencies -

```shell
> git clone https://github.com/kukiron/Blogster_NodeCI.git
> cd Blogster_NodeCI
> npm install
```

To install the client-side project dependencies -

```shell
> cd client
> npm install
```

## Development config options

You have to set up config file for development - `config/dev.js`. It contains the object with config keys & environment options:

```javascript
module.exports = {
  googleClientID: "Your Google Client ID",
  googleClientSecret: "Your Google Client Secret",
  mongoURI: "Running MongoDB instance",
  redisUrl: "Running Redis instance",
  cookieKey: "Add a cookie key",
  accessKeyId: "AWS S3 Access Key ID",
  secretAccessKey: "AWS S3 Secret Access Key"
}
```

To enable image loading with blogpost (or other file types), you need to create an AWS S3 bucket & pass the credentials to the respective config files.

### Setup MongoDB, Google clientID & client secret

You can install & start local instance of MongoDB. The project has used mLab MongoDB service. Also, you need to use your own clientID & client secret from Google.

Use these credentials in the config/dev.js file for development purposes.
