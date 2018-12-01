var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var porta = 3000
const data =[]

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


app.get('/buscaDado',(req,res)=>{
    return res.json({data})
})

app.post('/enviarDados',(req,res)=>{
    const result = req.body;
    if(!result){
        return res.status(400).end();
    }else{
        data.push(result);
        return res.json({ result });
    }
})

app.listen(porta,()=>{
    console.log("Rodando na porta: " + porta)
})