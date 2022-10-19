const express = require('express');
const router = express.Router();
const controleProdutos = require("../controllers/controllersProdutos");
const upload = require("../middlewares/multer");


// inicio detalhes do produto por id ------------------------------------------------------------///////
router.get("/area_compras_farmacia/:item",controleProdutos.detalhesFarmacia); // criação da página de detalhes 
router.get("/area_compras_variedades/:item",controleProdutos.detalhesVariedades);
router.get("/area_compras_pet/:item",controleProdutos.detalhesPet);
// router.get("/area_compras_home/:item",controleProdutos.detalhesHome);

router.get("/criar", controleProdutos.create);
router.post("/criar", upload.single('image'), controleProdutos.store);

router.get("/detalhe/:id", controleProdutos.detalhe);
router.put("/descricaoProduto", controleProdutos.update);
router.delete("/descricaoProduto", controleProdutos.destroy);

// inicio detalhes do produto por id ------------------------------------------------------------///////

module.exports = router;