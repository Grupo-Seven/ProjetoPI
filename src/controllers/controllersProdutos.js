const  Product = require("../models/produto");
const fs = require('fs');
const path = require('path');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controleProdutos = {
  index:(req, res)=>{
    let products1 =[]
    let products2 =[]
    let products3 =[]
    const allProducts = Product.findAll() // busca a array criada do allproducts.json que esta no models
    if(req.params.category){
       products1 = allProducts.filter(function(value){

        return value.sector == req.params.category && value.item <= 3 
           
      });
    
    
       products2 = allProducts.filter(function(value){
    
        return value.sector == req.params.category && value.item >= 4
      });
    
       products3 = allProducts.filter(function(value){
    
        return value.sector == req.params.category && value.id >= 18
      });
    }
    else{
      products1 = allProducts
    }
    //se houver categoria no req.params os produtos sera filtrados pela categoria, caso contrario pega todos os produtos.

    console.log(products1)
    return res.render("produtos",{products1 , products2, products3, toThousand});
 
  },
  //filtrando setor pelo req.params.category

  // farmacia inicio -------------------------------------------------------------------------------------////////
  detalhesFarmacia:(req,res) =>{
    
    const allProducts = Product.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.id == item
    })

    return res.render("area_compras_farmacia" ,{produtoDetalhe} );
  },
// farmacia fim -----------------------------------------------------------------------------------------////////


// variedades inicio -----------------------------------------------------------------------------------////////
  detalhesVariedades:(req,res) =>{
    
    const allProducts = Product.findAll()

    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){

       return produtoDetalhe.id == item
    })

    return res.render("area_compras_variedades", {produtoDetalhe});
  },
 //variedades fim -------------------------------------------------------------------------------------////////

  // pet inicio ------------------------------------------------------------------------------------------////////
  detalhesPet:(req,res) =>{
    
    const allProducts = Product.findAll()
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
  const allProducts = Product.findAll()

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
  const allProducts = Product.findAll()
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
  let id = req.params.id
// pega os dados da URL que o usuario esta passando
let body = req.body

   Product.update(id,body)
  // busca todos os produtos

  res.redirect('/produtos/area_compras_pet/' + id )

 },

 deletarProduto:(req, res) =>{

 },

}


module.exports = controleProdutos;
