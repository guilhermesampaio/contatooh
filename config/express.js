var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');

module.exports = function(){
    var app = express();

    // Configuração de variável de ambiente
    app.set('port', 3000);

    // Middleware
    // Configura o acesso do usuário ao 
    // conteúdo do diretório ./public
    app.use(express.static('./public'));
    
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require('method-override'));

    app.set('view engine', 'ejs');
    app.set('views', './app/views');

    
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

