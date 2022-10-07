const  todosProdutos = require("../models/produto");
const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controlePaginas = {
 
 // farmacia inicio -------------------------------------------------------------------------------------////////
 farmacia:(req,res) =>{

  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  let productsFarmacia = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item <= 3
       
  });


  let productsFarmacia2 = allProducts.filter(function(value){

    return value.sector == "farmacia" && value.item >= 4

  });


  return res.render("farmacia",{productsFarmacia , productsFarmacia2, toThousand});
},
// farmacia fim ----------------------------------------------------------------------------------------////////

// pet inicio -------------------------------------------------------------------------------------////////
  pet:(req,res) =>{
   
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

    let productsPet = allProducts.filter(function(value){

      return value.sector == "pet" && value.item <= 3 
         
    });
  
  
    let productsPet2 = allProducts.filter(function(value){
  
      return value.sector == "pet" && value.item >= 4
  
    });
  
    return res.render("pet",{productsPet , productsPet2, toThousand});
 },
 // pet fim -----------------------------------------------------------------------------------------////////


  // variedades inicio -----------------------------------------------------------------------------------------////////

 variedades:(req,res) =>{

  const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models

  let productsVariedades = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item <= 3
  })

  let productsVariedades2 = allProducts.filter(function(value){

    return value.sector == "variedades" && value.item >= 4
  })

   return res.render("variedades", {productsVariedades, productsVariedades2, toThousand});
 },
  // variedades fim -----------------------------------------------------------------------------------------////////


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
 }
};


module.exports = controlePaginas;



