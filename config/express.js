var express = require('express');

module.exports = function(){
    var app = express();

    // Configuração de variável de ambiente
    app.set('port', 3000);

    // Middleware
    // Configura o acesso do usuário ao 
    // conteúdo do diretório ./public
    app.use(express.static('./public'));

    return app;
};

