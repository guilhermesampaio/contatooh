var contatoController = {};
var contatos = [
        {id: 1, nome:'Guilherme', telefone:'982755794'},
        {id: 2, nome:'Sabrina', telefone:'58250648'}
    ];

contatoController.listarContatos = function (request, response) {
    response.json(contatos);
};

contatoController.obterContato = function (request, response){
    var contato = contatos.filter(function(contato){
        return contato.id == request.params.id;
    })[0];

    contato ? response.json(contato) : response.status(404).send('Contato não encontrado!');
};

module.exports = contatoController;



