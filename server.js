const rp = require('request-promise')
const cheerio = require('cheerio')
 
const options = {
  uri: 'http://globoesporte.globo.com/futebol/brasileirao-serie-a/',
  transform: function (body) {
    return cheerio.load(body)
  }
}
 
function processarDados(dados){
  //salva no banco de dados
  dados.forEach((data)=>{
      console.log(data)
  })
}
 
rp(options)
.then(($) => {
  const times = []
  $('.tabela-body-linha').each((i, item) => {
 
    const time = {
      nome: $(item).find('.tabela-times-time-nome').text(),
      posicao: parseInt($(item).find('.tabela-times-posicao').text())
    }
 
    if(time.nome !== "")
      times.push(time)
  })
  processarDados(times)
})
.catch((err) => {
  console.log(err);
})