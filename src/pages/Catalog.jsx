import { useState, useEffect, useCallback } from "react";
// import Grid from '../components/Grid'
import Helmet from "../components/Helmet";
import productData from "../assets/fakerData/products";
import category from "../assets/fakerData/category";
import colors from "../assets/fakerData/product-color";
import size from "../assets/fakerData/product-size";
// import ProductCard from '../components/ProductCard'
import Checkbox from "../components/Checkbox";
import Button from "../components/Button";
import InfinityList from "../components/InfinityList";

const Catalog = () => {
  const initFilter = {
    category: [],
    color: [],
    size: [],
  };

  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);
  const [filter, setFilter] = useState(initFilter);

  const filterProduct = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.categorySlug],
          });
          break;
        case "COLOR":
          setFilter({ ...filter, color: [...filter.color, item.color] });
          break;
        case "SIZE":
          setFilter({ ...filter, size: [...filter.size, item.size] });
          break;
        default:
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (i) => i !== item.categorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColor = filter.color.filter((i) => i !== item.color);
          setFilter({ ...filter, color: newColor });
          break;
        case "SIZE":
          const newSize = filter.size.filter((i) => i !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
      }
    }
  };

  const updateProduct = useCallback(() => {
    let newProductList = productList;
    if (filter.category.length > 0) {
      newProductList = newProductList.filter((i) =>
        filter.category.includes(i.categorySlug)
      );
    }
    if (filter.color.length > 0) {
      newProductList = newProductList.filter((product) => {
        const check = product.colors.find((color) =>
          filter.color.includes(color)
        );
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      newProductList = newProductList.filter((product) => {
        const check = product.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(newProductList);
  }, [filter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const clearFilter = () => setFilter(initFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__filter">
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              danh mục sản phẩm
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="catalog__filter__widget__content__item"
                  >
                    <Checkbox
                      label={item.display}
                      checked={filter.category.includes(item.categorySlug)}
                      onChange={(input) =>
                        filterProduct("CATEGORY", input.checked, item)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* end category */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="catalog__filter__widget__content__item"
                  >
                    <Checkbox
                      label={item.display}
                      checked={filter.color.includes(item.color)}
                      onChange={(input) =>
                        filterProduct("COLOR", input.checked, item)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* end color */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Kích cỡ</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="catalog__filter__widget__content__item"
                  >
                    <Checkbox
                      label={item.display}
                      checked={filter.size.includes(item.size)}
                      onChange={(input) =>
                        filterProduct("SIZE", input.checked, item)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* end size */}
          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__content">
              <Button onClick={() => clearFilter()} size="sm">
                Xóa bộ lọc
              </Button>
            </div>
          </div>
        </div>
        <div className="catalog__content">
          <InfinityList dataList={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
