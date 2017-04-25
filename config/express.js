var express = require('express');
var consign = require('consign');

module.exports = function(){
    var app = express();

    // Configuração de variável de ambiente
    app.set('port', 3000);

    // Middleware
    // Configura o acesso do usuário ao 
    // conteúdo do diretório ./public
    app.use(express.static('./public'));
    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    app.use('/', function(req, res, next){
        console.log('middleware A');        
        next();
    });

    app.use('/', function(req, res, next){
        console.log('middleware B');
        next();
    });
    
    // Auto load from scripts
    // Ex.: app.controllers.home
    //      app.routes.home
    consign({cwd: 'app'})
        .include('models')
        .then('controllers')
        .then('routes')
        .into(app);
    
    return app;
};

