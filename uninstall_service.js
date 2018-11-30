var Service = require('node-windows').Service

var svc = new Service({
    name:'ServidorApp',
    descritption:'Servidor do app metasis',
    script:'C:\\buscaNode\\server.js'
})

svc.on('uninstall',()=>{
    console.log('Serviço desinstalado com sucesso!')
})

svc.uninstall()

//executar no terminal o comando a baixo

// >>>>> node unistall_service.js <<<<<<