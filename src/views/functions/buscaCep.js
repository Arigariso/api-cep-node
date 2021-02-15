const fetch = require('node-fetch')


module.exports = async function buscaCep(cep) {
    const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`) 
    const json = await response.json()

    return json 
}


/* A função recebe o cep buscaCep(cep), e com o fetch ele retorna o resultado.
- O resultado é armazenado na variável json e transformado em json response.json()
- a constante json recebe o resultado em json e é retornado
- A constante resultado (na pagina app.js), armazena o json retornado pela função*/