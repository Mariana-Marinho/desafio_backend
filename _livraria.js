const livraria = require ('./livraria');

module.exports= {
    buscartodos: async (req, res)=> {   
        let json= {error: '', result: []}
        let livros= await livraria.buscartodos();
        for (let i in livros){
            json.result.push({
               id: livros[i].id,
               descricao: livros[i].titulo
            });
        }
        res.json(json);
    },

    buscarum: async(req,res)=>{
        let json= {error: '', result: {}};
        let id= req.params.id;
        let livro= await livraria.buscarum(id);
        if (livro){
            json.result = livro;
        }
        res.json (json);
    },

    inserir: async(req,res)=>{
        let json= {error: '', result: {}}; 
        let titulo= req.body.titulo;
        let autor= req.body.autor;
        let genero= req.body.genero;
        let ano_publicacao= req.body.ano_publicacao;
        let quantidade_estoque= req.body.quantidade_estoque;
        if (titulo&& autor){
            let BookId = await livraria.inserir(titulo, autor, genero, ano_publicacao, quantidade_estoque);
            json.result = {
                id: BookId,
                titulo,
                autor,
                genero,
                ano_publicacao,
                quantidade_estoque
            };
        }else{
            json.error = 'Os campos nao foram enviados';
        }
        res.json (json);
    },

    alterar: async(req,res)=>{
        let json= {error: '', result: {}}; 
        let id= req.body.id;
        let titulo= req.body.titulo;
        let autor= req.body.autor;
        let genero= req.body.genero;
        let ano_publicacao= req.body.ano_publicacao;
        let quantidade_estoque= req.body.quantidade_estoque;
        if (id && titulo && autor){
            await livraria.alterar(id, titulo, autor, genero, ano_publicacao, quantidade_estoque);
            json.result = {
                id,
                titulo,
                autor, 
                genero,
                ano_publicacao,
                quantidade_estoque
            };
        }else{
            json.error = 'Os campos nao foram enviados';
        }
        res.json (json); 
    },

    deletar: async (req, res)=> {
        let json= {error: '', result: {}}; 
        await livraria.deletar(req.params.id);
        res.json (json); 
    }
}