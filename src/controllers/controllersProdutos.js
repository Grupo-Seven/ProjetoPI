const  todosProdutos = require("../models/produto");
const express = require('express');
const app = express();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controleProdutos = {

  // farmacia inicio -------------------------------------------------------------------------------------////////
  detalhesFarmacia:(req,res) =>{
    
    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
    
    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.sector == "farmacia" && produtoDetalhe.item == item
    
    })

    return res.render("area_compras_farmacia" ,{produtoDetalhe});
  },
// farmacia fim -----------------------------------------------------------------------------------------////////


// variedades inicio -----------------------------------------------------------------------------------////////
  detalhesVariedades:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()

    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){

      return produtoDetalhe.sector == "variedades" && produtoDetalhe.item == item

    })

    return res.render("area_compras_variedades", {produtoDetalhe});
  },
 //variedades fim -------------------------------------------------------------------------------------////////

  // pet inicio ------------------------------------------------------------------------------------------////////
  detalhesPet:(req,res) =>{
    
    const allProducts = todosProdutos.findAll()

    let item = req.params.item
    let produtoDetalhe = allProducts.find(function(produtoDetalhe){

      return produtoDetalhe.sector == "pet" && produtoDetalhe.item == item

    })

    return res.render("area_compras_pet", {produtoDetalhe});
  },


  
// pet fim -------------------------------------------------------------------------------------------////////

// home inicio ------------------------------------------------------------------------------------------////////
  detalhe:(req,res) =>{
      
    const allProducts = todosProdutos.findAll()
    let item = req.params.item;

    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.item == item
    
    })

    return res.render("area_compras_home" ,{produtoDetalhe} );
  },
  // home fim -------------------------------------------------------------------------------------------////////

  formulario:(req,res) =>{
    return res.render("produtoCriar");
  },

  // crud de produtos ======================================

	// Detalhe de produtos ======================
	detail: (req, res) => {
		// const { id } = req.params;
		const allProducts = todosProdutos.findAll();

		res.render('descricaoProduto', { produtoDetalhe, toThousand });
	},

	// Create - Form to create
	create: (req, res) => {
		res.render('produtoCriar');
	},
	
	// Create 
	store: (req, res) => {
    const products = todosProdutos.findAll()
		const receivedProduto = req.body;
		receivedProduto.image = req.file.filename; // req.file -> propriedade adicionada pelo multer, na rota!
		receivedProduto.id = products.length + 1; // gerar o próximo ID do array, tamanho do array + 1!

		products.push(receivedProduto);
		todosProdutos.save(products);

		res.redirect('/produtos/detalhe/' + receivedProduto.id);
	},

	// Update
	update: (req, res) => {
		const { id } = req.params;
		todosProdutos.update(id, req.body);

		res.redirect('/produtos/editar/' + id);
	},

	// Delete 
	destroy : (req, res) => {
		const { id } = req.params;
		todosProdutos.destroy(id);

		res.redirect('/produtos/' + id );
	}
};

module.exports = controleProdutos;
