import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";

import { useSelector } from "react-redux";

import productData from "../assets/fakerData/products";

import Commands from "../utils/numberWithCommas";

import Button from "../components/Button";

import CartItem from "../components/CartItem";

const Cart = () => {
  const cartItem = useSelector((state) => state.cartItems.value);

  const [cartProduct, setCartProduct] = useState([]);
  const [totalProduct, setTotalProduct] = useState(0);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProduct(productData.getCartItems(cartItem));
    setTotalProduct(
      cartItem.reduce((total, item) => total + Number(item.quantity), 0)
    );
    setTotalPrice(
      cartItem.reduce(
        (total, item) => total + Number(item.quantity) * Number(item.price),
        0
      )
    );
  }, [cartItem]);

  return (
    <Helmet title="Giỏ hàng" style={{ marginTop: 200 }}>
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__product">
            Bạn đang có {totalProduct} trong giỏ hàng
          </div>
          <div className="cart__info__price">
            <span>Thành tiền</span>
            <span>{Commands(totalPrice)}</span>
          </div>
          <Button size="sm">Đặt hàng</Button>

          <Link to="/catalog">
            <Button size="sm">Tiếp tục mua hàng</Button>
          </Link>
        </div>

        <div className="cart__list">
          {cartProduct.map((item, key) => {
            return <CartItem items={item} key={key} />;
          })}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
