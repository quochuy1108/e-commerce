import { useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet";
import heroSliderData from "../assets/fakerData/heroSlider.js";
import policy from "../assets/fakerData/policy.js";
import HeroSlider from "../components/HeroSlider";
import Grid from "../components/Grid";
import PolicyCard from "../components/PolicyCard";
import Section, { SectionTitle, SectionBody } from "../components/Section";
import productData from "../assets/fakerData/products";
import ProductCard from "../components/ProductCard";
import banner from "../assets/images/banner.png";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Helmet title="Trang chủ">
      <HeroSlider
        data={heroSliderData}
        control={true}
        timeOut={5000}
        auto={true}
      />
      {/* end HeroSlide */}
      <Section>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {policy.map((item, index) => {
              return (
                <PolicyCard
                  key={index}
                  icon={item.icon}
                  name={item.name}
                  description={item.description}
                />
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
      {/* end Policy */}
      <Section>
        <SectionTitle>Top sản phẩm bán chạy</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={0}>
            {productData.getProducts(4).map((product, index) => {
              return (
                <ProductCard
                  key={index}
                  title={product.title}
                  price={Number(product.price)}
                  img01={product.image01}
                  img02={product.image02}
                  slug={product.slug}
                />
              );
            })}
          </Grid>
        </SectionBody>
      </Section>
      {/* end selling product */}

      <Section>
        <SectionTitle>sản phẩm mới</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={0}>
            {productData.getProducts(8).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end new product available */}

      <Section>
        <SectionBody>
          <Link to="/catalog">
            <img style={{ width: "100%" }} src={banner} alt="" />
          </Link>
        </SectionBody>
      </Section>
      {/* end banner */}

      <Section>
        <SectionTitle>phổ biến</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {productData.getProducts(12).map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
      {/* end popular product section */}
    </Helmet>
  );
};

export default Home;
