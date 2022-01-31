import React, { useState, useEffect } from "react";
import productData from "../assets/fakerData/products";
import { Link } from "react-router-dom";

const Search = ({ active, setToggleSearch }) => {
  const allProduct = productData.getAllProducts();
  const [valueInput, setValueInput] = useState("");

  const handleSearch = (e) => {
    setToggleSearch(true);
    setValueInput(e.target.value);
  };

  const newProduct = allProduct.filter((i) =>
    i.title.toLowerCase().includes(valueInput.toLocaleLowerCase())
  );

  const handleClickInput = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`search ${active ? "active" : ""}`}>
      <div className="search__input">
        <input
          type="text"
          placeholder="Search here..."
          onChange={handleSearch}
          onClick={handleClickInput}
        />
      </div>
      <div className="search__content">
        {newProduct.map((item, index) => {
          return (
            <Link
              to={`/catalog/${item.slug}`}
              href={`/catalog/${item.slug}`}
              key={index}
              className="search__content__item"
            >
              <div className="search__content__item__img">
                <img src={item.image02} alt="" />
              </div>
              <div className="search__content__item__title">{item.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Search;
