import React, { useState, useEffect } from "react";
import { updateItem, removeItem } from "../redux/shopping-cart/cartItemSlide";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import Commas from "../utils/numberWithCommas";

const CartItem = ({ items }) => {
  const dispatch = useDispatch();

  const [item, setItem] = useState(items);

  const [quantity, setQuantity] = useState(items.quantity);

  useEffect(() => {
    setItem(items);
    setQuantity(items.quantity);
  }, [items]);

  const updateProduct = (opt) => {
    console.log(opt);
    if (opt === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
    } else {
      dispatch(
        updateItem({ ...item, quantity: quantity > 1 ? quantity - 1 : 1 })
      );
    }
  };

  const removeProduct = () => {
    dispatch(removeItem(item));
  };
  return (
    <div className="cart__item">
      <Link to={`/catalog/${item.slug}`} className="cart__item__img">
        <img src={item.product.image01} alt="" />
      </Link>
      <div className="cart__item__info">
        <Link to={`/catalog/${item.slug}`} className="cart__item__info__detail">
          {`${item.product.title} - ${item.size} - ${item.color}`}
        </Link>
        <div className="cart__item__info__price">{Commas(item.price)}</div>
        <div className="cart__item__info__quantity">
          <div className="product__info__item__quantity">
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateProduct("-")}
            >
              <i className="bx bx-minus"></i>
            </div>
            <div className="product__info__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product__info__item__quantity__btn"
              onClick={() => updateProduct("+")}
            >
              <i className="bx bx-plus"></i>
            </div>
          </div>
        </div>
        <div className="cart__item__info__delete" onClick={removeProduct}>
          <i className="bx bxs-x-circle"></i>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
