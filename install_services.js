var Service = require('node-windows').Service

var svc = new Service({
    name:'serverTeste', // nome do servidor 
    description:'Servidor teste', //descrição que irá aparecer no gerenciador do windows
    script:'C:\\buscaNode\\main.js' // sempre colocar caminho absoluto
})

svc.on('install',()=>{
    svc.start()
})

svc.install()

//rodar no terminal o comando a baixo

// >>>>> node install_services.js <<<<<<