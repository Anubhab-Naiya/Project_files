// import express from 'express';
// import http, { createServer } from 'http';
// import {Server} from 'socket.io';
// import path from 'path'



// const app = express();
// const server = createServer(app);

// const io = new Server(server);
// const __dirname = path.dirname('./public')

// //app.use(express.static(path.resolve("./public")));

// // app.get('/',(req,res)=>{
// //    res.sendFile('/public/index.html');
// // })
// io.on('connection',(socket)=>{
//     socket.on('input message',(message)=>{
//         console.log('message received',message)
//         io.emit('message',message)
//     })
// })


// app.get('/', (req, res) => { 
//     res.sendFile(path.resolve(__dirname, 'public/index.html')); 
// });


// server.listen(9000,()=>{
//     console.log("Server is running on port 9000");
// })
import express from 'express';
import { createServer } from 'http';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));

io.on('connection',(socket)=>{
    console.log('a new client connected')
    socket.on('input message',(message)=>{
        console.log('message:', message)
        io.emit('input message', message);
    })
})



app.get('/', (req, res) => {
    res.sendFile(join(__dirname, 'public', 'index.html'));
});

server.listen(5000, () => {
    console.log('Server is running on port 5000');
});
