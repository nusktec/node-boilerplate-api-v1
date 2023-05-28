/**
 * Slantapp code and properties {www.slantapp.io}
 */
import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user resource');
});

//export default
export default router
