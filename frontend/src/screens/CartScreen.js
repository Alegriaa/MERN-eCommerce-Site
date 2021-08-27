import React, { useEffect } from "react";
// import { Link } from " react-router-dom";
// needed if dealing with a redux state in a component
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import { addToCart } from "../actions/cartActions";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";

const CartScreen = ({ match, location, history }) => {
  const productId = match.params.id;

  // search property returns the querystring part of the URl, including
  // including the question mark (?)
  const quantity = location.search ? location.search.split("=")[1] : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  return <div>Cart</div>;
};

export default CartScreen;
