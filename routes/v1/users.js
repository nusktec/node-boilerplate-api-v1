/**
 * Slantapp code and properties {www.slantapp.io}
 */
import express from 'express';
let router = express.Router();
//libraries
import {ControllerLogin} from './../../controllers/controller.v1.auth.js'
/* GET users listing. */
router.get('/', ControllerLogin, function(req, res, next) {
  res.send('respond with a user resource and email must be sent');
});

//export default
export default router
