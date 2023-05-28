/**
 * Slantapp code and properties {www.slantapp.io}
 */
//import http server
import express from 'express';
//make an express server
const app = express()
import http from 'http';
//create server
const server = http.createServer(app);
import {Server} from 'socket.io';

const io = new Server(server)
//start initialization
app.get('/', (req, res, next) => {
    res.json({mode: "Socket running on 3010..."})
})
//hold on socket
io.on('connection', (socket) => {
    //connection established
    console.log("Connected @socket")
    console.log(socket)
})
io.on('disconnect', (socket) => {
    //connection established
    console.log("Disconnected @socket")
    console.log(socket)
})
io.on('open', (socket) => {
    //connection established
    console.log("Connection opened @socket")
    console.log(socket)
})
//listen to server
server.listen(3010, () => {
    //server created
    console.log("On 3010 created [http, socket]")
})
