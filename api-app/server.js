
// Add this to the VERY top of the first file loaded in your app

const apm = require('./apm');

// require packages
const Koa = require('koa');
const router = require('koa-router')();
const mount = require('koa-mount');
const cors = require('@koa/cors');

// create an instance of the Koa object
const app = new Koa();

app.use(cors());

// mount the route
app.use(mount(require('./router/car.js')));
app.use(router.routes()); // route middleware

// add Elastic APM in the bottom of the middleware stack
// app.use(apm.middleware.connect());

if(require.main === module) {
     app.listen(4000); // default
}