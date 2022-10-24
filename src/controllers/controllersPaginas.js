const  todosProdutos = require("../models/produto");
const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controlePaginas = {
 
 home:(req,res) =>{

  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  let productsHome = allProducts.filter(function(value){
    return value.sector == "home" && value.item <= 3
  })

  let productsHome2 = allProducts.filter(function(value){
    // value.sector == "home" && value.item >= 4
    return value.sector == "home" && value.item > 3 && value.item < 7
  })

  let productsHome3 = allProducts.filter(function(value){
    return value.sector == "home" && value.item >= 7
  })

   return res.render("home", {productsHome, productsHome2, productsHome3, toThousand});
 },

 login:(req,res) => {
  //console.log(req.cookies.teste);
  return res.render("landingPageLogin");
 },

 duvidas:(req,res) => {
  //console.log(req.cookies.teste);
  return res.render("duvidas");
 },

  quemSomos:(req,res)=>{
    return res.render("quemSomos")
  },

  cart:(req,res) =>{

    const allProducts = todosProdutos.findAll()

    let produtosSelecionados = req.params.query || [1,2,3]
    let produtosCarrinho = allProducts.filter(function(produto){

      return produtosSelecionados.includes(produto.id)
    })

    return res.render("cart", {produtosCarrinho});

  },
  
  criarProduto:(req,res) =>{
    return res.render("produtoCriar")
  },
  
politicadevendas:(req,res) =>{
  return res.render("politicasdevendas")
},


};

module.exports = controlePaginas;



