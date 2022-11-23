const express = require('express');
const { request } = require('https');
const app = express()
const path = require('path')
const port = 8000;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors())

app.use(express.static(path.join(__dirname,'build')))

app.get('/hello',(req,res)=> {
    res.status(200).send({'msg':'Kunapheap is Quality Coming Soon ..'})
})

app.listen(port  , () => {
    console.log('server running',port)
})