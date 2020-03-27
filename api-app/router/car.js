const Koa = require('koa');
const router = require('koa-router')();
const app = new Koa();

const apm = require('../apm');

// a simple car object that we can serve
const car = {
   make: 'Honda',
   year: '2012',
   model: 'Civic'
};

// Route to handle GET request
router.get('/vehicle', async (ctx, next) => {

    console.log("route /vehicle ctx.headers.user-agent", ctx.headers['user-agent']);
    
    // apm.logger.trace(` --- robs trace ${ctx.headers['user-agent']}`);

    await pauser(200);
    await pauser(300);

    ctx.body = await getVehicle();
    await next();
});

async function getVehicle() {
    var span = apm.startSpan('getVehicle');

    apm.logger.debug('getVehicle');

    await pauser(100);

    if(span) {
        span.end();
    }
    return car;
}

async function pauser (time) {
    var delay = Math.floor(Math.random() * time) + 100;
    var span = apm.startSpan(`pause ${delay}ms`);

    return new Promise((resolve) => {

        setTimeout(() => {
            console.log(` --- paused ${delay}`);
            // console.log(' --- span', span);

            if(span) {
                span.end();
            }

            resolve();
        }, delay)
    })
}

app.use(router.routes()); // route middleware

module.exports = app;