// product controller

import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";

// fetching all products
// GET /api/products
// @access public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

// fetching a single product
// GET /api/products/:id
// @access public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product was not found");
  }
});

export { getProducts, getProductById };
