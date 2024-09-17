const express= require ("express");
const api = express.Router();

const livraria= require('./Biblioteca_controle'); 

api.get ('/livros', livraria.buscartodos);

api.get ('/livro/:id', livraria.buscarum);

api.post ('/livros', function (req,res){
    livraria.inserir
});

api.put ('/livro/:id', livraria.alterar);

api.delete ('/livros/:id', livraria.deletar);

module.exports= api; 