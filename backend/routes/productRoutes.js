import express from "express";
import asyncHandler from "express-async-handler";

import Product from "../models/productModel.js";
const router = express.Router();

// fetching all product
// GET /api/products
// @access public

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find({});
    // not authorized error
    // res.status(401);
    // throw new Error("Not Authorized");
    res.json(products);
  })
);

// fetching a single product
// GET /api/products/:id
// @access public

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);

    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product was not found");
    }
  })
);

export default router;
