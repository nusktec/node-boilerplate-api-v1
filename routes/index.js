import express from 'express';
import {ErrorClass, Utils} from "../core/index.js";

let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json(Utils.PrintRest("API Running - Ok", true, ['SlantApp Links']))
});

export default router;
