var express = require('express');
var router = express.Router();
var controlePaginas = require("../controllers/controllersPaginas");
var controleUsuarios = require("../controllers/controllersUsuarios");
const controleUsuariosEmpresas = require("../controllers/controllersUsuariosEmpresas");
const validations = require("../middlewares/validaFormulario");
const validationsEmpresa = require("../middlewares/validaFormularioEmpresa");
var  controleProdutos = require("../controllers/controllersProdutos");
<<<<<<< HEAD


=======
const validaLoginCliente = require("../middlewares/validaLoginCliente");

router.get("/login",validaLoginCliente,controlePaginas.login);
>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
router.get("/farmacia",controlePaginas.farmacia);
router.get("/pet",controlePaginas.pet);
router.get("/variedades",controlePaginas.variedades);
router.get("/",controlePaginas.home);
<<<<<<< HEAD
router.get("/login",controlePaginas.login);
=======
router.get("/duvidas",controlePaginas.duvidas);



//router.post("/loginEmpresa",controlePaginas.loginValidation);

>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb


// inicio formulario-----------------------------------------------------------------------------------------/////
router.get("/formularioEmpresas",controleUsuariosEmpresas.formularioEmpresa);
router.post("/formularioEmpresas",validationsEmpresa,controleUsuariosEmpresas.armazenarEmpresa);

router.get("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioEditEmpresas);
router.put("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioUpdateEmpresas);
router.delete("/formularioEmpresasEdit/:CNPJ" ,controleUsuariosEmpresas.formularioDeleteEmpresas);

<<<<<<< HEAD
//-------------------------------------------------------------------------------------------------------------/////
router.get("/formulario",controleUsuarios.formulario);
router.post("/formulario", validations ,controleUsuarios.armazenar);

router.get("/formularioEdit/:cpf" ,controleUsuarios.formularioEdit);
router.put("/formularioEdit/:cpf" ,controleUsuarios.formularioUpdate);
router.delete("/formularioEdit/:cpf" ,controleUsuarios.formularioDelete);

// fim  formulario------------------------------------------------------------------------------------------/////

//formulario de criaçao de produtos
// router.get("/criarProduto",controleProdutos.formulario);
// router.post("/criarProduto",controleProdutos);


// router.get("/descricao",controleProdutos.formulario);

module.exports = router;

=======
// fim  formulario------------------------------------------------------------------------------------------/////

//formulario de criaçao de produtos
router.get("/criarProduto",controleProdutos.formulario);
// router.post("/criarProduto",controleProdutos);

module.exports = router;


>>>>>>> 27383bd5925ee642e82e1e64af23a9a2208299fb
