import express from 'express';
// const express = require('express')

const app = express();
import path from 'path';

const __dirname = path.resolve()
const PORT = process.env.PORT ?? 5000

const data = [
    {
        "id": 1,
        "name": "Senem",
        "age": 21
    },
    {
        "id": 1,
        "name": "Leyla",
        "age": 21
    },
    {
        "id": 1,
        "name": "Cahandar",
        "age": 21
    }
]

app.listen(PORT, () => {
    console.log(`Server  active in port ${PORT}`)
});

//get post put patch 
// app.get('/', (request, response) => {
//     response.send('Data catdi ')
// })

// app.get('/about', (request, response)=>{
//     response.send(`<h3>About us page </h3>`)
// })

// app.use(express.static(path.resolve(__dirname, '' )));

// app.get('/data', (request, response)=>{
//     response.sendFile(path.resolve(__dirname, '', 'data.json')); 
// })

// app.get('/contact', (request, response)=>{
//     response.sendFile(path.resolve(__dirname, '', 'contact.html')); 
// })

// app.get('/home', (request, response)=>{
//     response.sendFile(path.resolve(__dirname, '', 'home.html')); 
// })

app.get('/data', (request, response) => {
    response.send(data);
}); 