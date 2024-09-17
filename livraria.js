const database= require ('./database')

module.exports= {
  buscartodos: () => {
    return newPromise((aceito, rejeitado) => {
        database.query('SELECT * FROM livros',(error,results)=>{
          if (error) {rejeitado(error); return};
        aceito(results);
          });
    });
  },


  buscarum: (id)=> {
    return newPromise((aceito, rejeitado) => {
    database.query ('SELECT * FROM livros WHERE id=?', [id], (error, results)=>{
        if (error) {rejeitado(error); return};
          if (results.length>0){
            aceito(results[0]);
           }else{
            aceito(false);
        }
        });
    });
  },

   inserir: (titulo, autor, genero, ano_publicacao, quantidade_estoque) => {
    return newPromise((aceito, rejeitado) => {
    database.query ('INSERT INTO livros(titulo, autor, genero, ano_publicacao, quantidade_estoque) VALUES (?,?)',
     [titulo,autor, genero, ano_publicacao, quantidade_estoque], 
     (error, results)=> {
      if (error) {
        rejeitado(error); return
    };
      aceito (results.insertId);
        }
    );
        });
  },


  alterar: (id, titulo, autor)=> {      
    return newPromise((aceito, rejeitado) => {
    database.query ('UPDATE livros SET titulo = ?, autor = ? WHERE id= ?',
    [titulo, autor, id], 
     (error, results)=> {
      if (error) { rejeitado(error); return};
      aceito (results);
        }
    );
        });
  },   

  deletar: () => {
    return newPromise((aceito, rejeitado) => {
        database.query('DELETE FROM livros WHERE id=?',[id], (error,results)=>{
          if (error) {rejeitado(error); return};
        aceito(results);
          });
    });
  },
};