# Blogster

Blog application with cache implementation & integration tests. Technologies used -

* Node.js
* MongoDB (Mongoose)
* Create React App
* Redis
* Jest
* Integration testing (Puppeteer)

## Getting started

Clone the repo & install dependencies. To install the server-side dependencies -

```shell
> git clone https://github.com/kukiron/Blogster.git
> cd Blogster
> npm install
```

To install the client-side project dependencies -

```shell
> cd client
> npm install
```

## Setup MongoDB, Google clientID & client secret

You can install & start local instance of MongoDB. The project has used mLab MongoDB service. Also, you need to use your own clientID & client secret from Google.

Use these credentials in the config/dev.js file for development purposes.
