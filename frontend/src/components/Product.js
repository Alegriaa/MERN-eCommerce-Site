import React from "react";
import { Card } from "react-bootstrap";
import products from "../products";

/*
Product component that is currently used in the homescreen
Using Card from react bootstrap and displaying the information
from the products data objects here
*/

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* backtick template literal */}
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </a>
        <Card.Text as="div">
          <div className="my-3">
            {product.rating} from {product.numReviews} reviews
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
