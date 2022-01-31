import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Helmet from "../components/Helmet";
import productData from "../assets/fakerData/products";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import ProductCard from "../components/ProductCard";
import Grid from "../components/Grid";
import ProductView from "../components/ProductView";

const Product = () => {
  const params = useParams();
  const product = productData.getProductBySlug(params.slug);

  const relatedProducts = productData.getProducts(8);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section marginTop={true}>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>

      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  title={item.title}
                  img01={item.image01}
                  img02={item.image02}
                  price={Number(item.price)}
                  slug={item.slug}
                />
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
