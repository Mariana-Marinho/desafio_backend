require ('dotenv').config({path:'variaveis.env'});

const express = require ('express');

const cors = require ('cors');

const bodyParser = require ('body-parser');

const api= require('./api');

const server= express();

server.use(cors());

server.use(bodyParser.urlencoded({extended:false}));

server.use('/api', api)

server.listen(process.env.PORT, ()=>{
    console.log('O servidor esta rodando em:http://localhost:${process.env.PORT}');
})