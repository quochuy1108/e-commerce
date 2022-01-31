import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Router from "../routers/Router";
import ProductViewModal from "./ProductViewModal";

const Layout = () => {
  return (
    <BrowserRouter>
      <div>
        <div className="container">
          <Header />
          <div className="main">
            <Router />
          </div>
        </div>
        <Footer />
        <ProductViewModal />
      </div>
    </BrowserRouter>
  );
};

export default Layout;
