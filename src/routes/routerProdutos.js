var express = require('express');
const controlePaginas = require('../controllers/controllersPaginas');
var router = express.Router();
var controleProdutos = require("../controllers/controllersProdutos");

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, __dirname + '../../../public/img/');
  },

  filename: (req, file, callback) => {
    callback(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage });

// inicio detalhes do produto por id ------------------------------------------------------------///////
router.get("/area_compras_farmacia/:item",controleProdutos.detalhesFarmacia); // criação da página de detalhes 
router.get("/area_compras_variedades/:item",controleProdutos.detalhesVariedades);
router.get("/area_compras_pet/:item",controleProdutos.detalhesPet);

// inicio detalhes do produto por id ------------------------------------------------------------///////

//formulario de criaçao de produtos
router.get("/criarProduto",controleProdutos.inserirProduto);
///////////   URL            CONTROLLER       FUNCAO CALLBACK(VIEW)
//edição de produtos
router.get("/editProdutos/:id",controleProdutos.editProdutos);
 //  na URL ira aparecer a variavel criada na controllerPordutos                     
router.post("/criarProduto",upload.single('imagem'),controleProdutos.adicionarProduto);
// na criacao de produtos o usuario envia imagem do produto
router.put("/editar/:id",controleProdutos.atualizarProduto);
router.delete("/criarProduto",controleProdutos.deletarProduto);


module.exports = router;