const  todosProdutos = require("../models/produto");
const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controleProdutos = {

  // farmacia inicio -------------------------------------------------------------------------------------////////
  detalhesFarmacia:(req,res) =>{
    
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.id == item
    })

    return res.render("area_compras_farmacia" ,{produtoDetalhe} );
  },
// farmacia fim -----------------------------------------------------------------------------------------////////


// variedades inicio -----------------------------------------------------------------------------------////////
  detalhesVariedades:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()

    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){

       return produtoDetalhe.id == item
    })

    return res.render("area_compras_variedades", {produtoDetalhe});
  },
 //variedades fim -------------------------------------------------------------------------------------////////

  // pet inicio ------------------------------------------------------------------------------------------////////
  detalhesPet:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()
    let item = req.params.item;

    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.id == item
    })

    return res.render("area_compras_pet" ,{produtoDetalhe} );
  },
// pet fim -------------------------------------------------------------------------------------------////////

//renderizando a pagina para inserir produtos
inserirProduto:(req, res) =>{
  res.render("produtoCriar");
},

// Adicionando Produto (view produtoCriar)
 adicionarProduto:(req, res) =>{
  //fazendo a leitura de todos os produtos
  const allProducts = todosProdutos.findAll()

  //recupera os dados enviado
  const produto = req.body;
  
  //re.file ->Propriedade adicionada pelo multer 
  produto.image = req.file.filename;

  //para gerar o proximo id do array, tamanho do array +1
  produto.id = allProducts.length + 1;

  allProducts.push(produto);

   //escrever uma nova linha no arquivo na pasta allProdutos e JSON.stringify trtansforma objeto em JSon
   fs.writeFileSync(path.resolve('src/database/allProdutos.json'),JSON.stringify(allProducts));


  res.redirect('/pet/');

 },


editProdutos:(req, res) =>{
  const allProducts = todosProdutos.findAll()
                                   // busca todos os produtos

    let id = req.params.id
    // pega os dados da URL que o usuario esta passando
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){
    // faz um filtro do id que o usuario passou
      return produtoDetalhe.id == id
      //retorna os dados do produto
    })
  res.render("descricaoProduto",{product:produtoDetalhe});
  //passando os dados do produto para view
},

 atualizarProduto:(req, res) =>{
  res.render('descricaoProduto')

 },

 deletarProduto:(req, res) =>{

 },

}


module.exports = controleProdutos;
