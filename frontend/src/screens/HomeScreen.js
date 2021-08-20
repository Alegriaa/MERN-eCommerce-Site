import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { Row, Col } from "react-bootstrap";
import { listProducts } from "../actions/productAction";
import Message from "../components/Message";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
    // passing dispatch here again as a dependency or we will get a warning
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            // some responsiveness
            <Col key={product._id} sm={12} md={6} lg={4}>
              {/* pass in product as a prop to this component */}
              <Product product={product} />
              <h3>{product.name}</h3>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
