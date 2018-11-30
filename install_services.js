var Service = require('node-windows').Service

var svc = new Service({
    name:'ServidorApp', // nome do servidor 
    description:'Servidor do app metasis', //descrição que irá aparecer no gerenciador do windows
    script:'C:\\buscaNode\\server.js' // sempre colocar caminho absoluto
})

svc.on('install',()=>{
    svc.start()
})

svc.install()

//rodar no terminal o comando a baixo

// >>>>> node install_service.js <<<<<<