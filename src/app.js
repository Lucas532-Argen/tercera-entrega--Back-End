import express from 'express'
import ProductManager from 'ProductManager'

const express = require('express');
const ProductManager = require('./ProductManager'); 

const app = express();
const port = 3060; //puerto

// instancia de ProductManager
const productManager = new ProductManager();

// Endpoint para obtener todos los productos o un número limitado de productos
app.get('/products', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit); // Lee el parámetro de query "limit"
    const products = await productManager.getAllProducts(limit);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
});

// Endpoint para obtener un producto por su ID
app.get('/products/:pid', async (req, res) => {
  const productId = req.params.pid;
  try {
    const product = await productManager.getProductById(productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Producto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el producto' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor Express en ejecución en el puerto ${port}`);
});
