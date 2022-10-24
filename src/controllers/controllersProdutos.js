const  todosProdutos = require("../models/produto");
const express = require('express');
const app = express();

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const controleProdutos = {

  index:(req,res) =>{

    const allProducts = todosProdutos.findAll() // busca a array criada do allproducts.json que esta no models
  
    let produtos = allProducts.filter(function(value){
      return value.sector == req.params.categoria
    })
  
     return res.render("categorias", {produtos, toThousand});
   },

// home inicio ------------------------------------------------------------------------------------------////////
  detalhe:(req,res) =>{
      
    const allProducts = todosProdutos.findAll()

    let produtoDetalhe = allProducts.find(function(produtoDetalhe)  {
      
      return produtoDetalhe.id == req.params.id;
    
    })

    return res.render("detalheProduto" ,{produtoDetalhe} );
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
    receivedProduto.item = products.at(-1).item + 1;

		products.push(receivedProduto);
		todosProdutos.save(products);

		res.redirect('/produtos/detalhe/' + receivedProduto.id);
	},

	// Update
	update: (req, res) => {
		const { id } = req.params;
		todosProdutos.update(id, req.body);

		res.redirect('/produtos/detalhe/' + id);
	},

	// Delete 
	destroy : (req, res) => {
		const { id } = req.params;
		todosProdutos.destroy(id);

		res.redirect('/');
	}
};

module.exports = controleProdutos;
