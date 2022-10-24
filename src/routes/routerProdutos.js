const express = require('express');
const router = express.Router();
const controleProdutos = require("../controllers/controllersProdutos");
const upload = require("../middlewares/multer");


// inicio detalhes do produto por id ------------------------------------------------------------///////
router.get("/:categoria", controleProdutos.index);
router.get("/criar", controleProdutos.create);
router.post("/criar", upload.single('image'), controleProdutos.store);

router.get("/detalhe/:id", controleProdutos.detalhe);
router.put("/editar/:id", controleProdutos.update);
router.delete("/delete/:id", controleProdutos.destroy);

// inicio detalhes do produto por id ------------------------------------------------------------///////

module.exports = router;