var controller = {};

controller.index = function (req, res) {        
    res.render('index', {nome: 'Express'});
};

controller.about = function (req, res) {
   res.send('message from server mother fucker, ma parida');
}

module.exports = controller;