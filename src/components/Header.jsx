import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/Logo-2.png";
import { useSelector } from "react-redux";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const cartItem = useSelector((state) => state.cartItems.value);

  const [productInCart, setProductInCart] = useState(0);
  const [toggleSearch, setToggleSearch] = useState(false);

  useEffect(() => {
    setProductInCart(
      cartItem.reduce((acc, item) => acc + Number(item.quantity), 0)
    );
  }, [cartItem]);

  const navLeftItem = [
    { display: "Trang chủ", path: "/" },
    { display: "Sản phẩm ", path: "/catalog" },
  ];

  const { pathname } = useLocation();
  const activeNav = navLeftItem.findIndex((e) => e.path === pathname);

  const headerRef = useRef();
  const menuLeft = useRef();

  const goToCart = () => {
    navigate("/cart");
  };

  const handleSearch = (e) => {
    setToggleSearch(!toggleSearch);
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
  }, []);

  const handleMenuLeft = () => {
    menuLeft.current.classList.toggle("active");
  };

  return (
    <div className="header" ref={headerRef}>
      <div className="container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile-toggle" onClick={handleMenuLeft}>
            <i className="bx bx-menu-alt-left"></i>
          </div>
          <ul className="header__menu__left " ref={menuLeft}>
            <div className="header__menu__left__close" onClick={handleMenuLeft}>
              <i className="bx bxs-chevron-left"></i>
            </div>
            {navLeftItem.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`header__menu__item header__menu__left__item ${
                    index === activeNav ? "active" : ""
                  }`}
                >
                  <Link to={item.path}>{item.display}</Link>
                </div>
              );
            })}
          </ul>
          <ul className="header__menu__right">
            <div
              className="header__menu__item  header__menu__right__item"
              onClick={handleSearch}
            >
              <i className="bx bx-search"></i>
              <Search active={toggleSearch} setToggleSearch={setToggleSearch} />
            </div>
            <div
              className={`header__menu__item  header__menu__right__item ${
                pathname === "/cart" ? "active" : undefined
              }`}
              onClick={goToCart}
            >
              <i className="bx bxs-shopping-bag"></i>
              <div className="header__menu__right__item__cart-number">
                {productInCart}
              </div>
            </div>
            <div
              style={{ cursor: "default" }}
              className="header__menu__item  header__menu__right__item"
            >
              <i className="bx bx-user"></i>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
