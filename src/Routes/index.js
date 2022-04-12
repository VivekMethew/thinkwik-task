const express = require('express')
const router = express.Router()

router.use(printRoutes)

router.use('/users', require('./users/users.Routes'));
router.use('/events', require('./Events/events.Routes'));


/** @description prints route to the console */
function printRoutes(req, res, next) {
    console.log(`************************`);
    console.log(`NEW REQUEST : ${req.method} ${req.originalUrl}`);
    console.log(req.body);
    console.log(`************************`);
    next();
}



module.exports = router