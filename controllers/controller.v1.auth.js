/**
 * Slantapp code and properties {www.slantapp.io}
 */
import Async from './../core/core.async.js'
import Mailer from './../services/services.mail.js'

export const ControllerLogin = Async(async (req, res, next) => {
    //do logic here
    await new Mailer(req.body.email).body("this is a test body from node boiler").who("from slantapp devs").subject("From User Sub").send()
    console.log("Email sent !!!")
    next()
})
