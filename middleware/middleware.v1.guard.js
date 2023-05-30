/**
 * Slantapp code and properties {www.slantapp.io}
 */
import Async from './../core/core.async.js'

export const MiddlewareApiGuard = async (req, res, next) => {
    //do logic here
    console.log(req.body)
    console.log("from middle where")
    next()
}
