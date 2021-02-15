const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const buscaCep = require('./src/views/functions/buscaCep')
const buscaCepEnd = require('./src/views/functions/buscaCepEnd')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

/* fdeclaração do uso do ejs */
app.set('view engine','ejs')
/* indicando para o express onde esta a pasta views */
app.set('views','./src/views')
/* renderizando pagina principal */
app.get('/', (req,res) =>{
    /* chamando o arquivo na views */
    res.render('index')
})
/* 1º pegando os dados da minha view(via formulario, post, no index.ejs). Depois a função recebe (buscaCep.js) */
app.post('/envia-cep', async(req,res) =>{
    const { cep } = req.body
    const resultado = await buscaCep(cep)
    
    res.render('resultado', {dado: resultado}) 
    /* para enviar dado pra pagina resultado;ejs, transforma em objeto {dado: resultado}*/

})

app.post('/envia-cep2', async(req,res) => {  
    const { end } = req.body;   
    const resultado = await buscaCepEnd(end)
   
   res.send({dado: resultado})  

})

app.listen(3333)