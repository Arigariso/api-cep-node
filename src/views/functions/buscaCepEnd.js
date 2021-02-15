const fetch = require('node-fetch')

module.exports = async function buscaCepEnd(end) {
    const response = await fetch(`http://viacep.com.br/ws/sp/sao paulo/${end}/json/`) 
    const json = await response.json()

    return json 
}