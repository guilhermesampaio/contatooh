module.exports = function(app){
    var contatoController = app.controllers.contato; // Contato Controller instance
    app.get('/contatos', contatoController.listarContatos); // Sets to /contatos endpoint a index callback function
    app.get('/contatos/:id', contatoController.obterContato);
};