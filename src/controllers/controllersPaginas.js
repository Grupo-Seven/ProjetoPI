const  todosProdutos = require("../models/produto");
const  todosUsuarios = require("../models/usuariosModels");
const {validationResult} = require("express-validator");
const bcrypt = require("bcryptjs");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controlePaginas = {
 
 home:(req,res) =>{


   return res.render("home");
 },

 login:(req,res) => {
  //console.log(req.cookies.teste);
  return res.render("landingPageLogin");
 },

 

};

module.exports = controlePaginas;



