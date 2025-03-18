import Banner from "@components/Banner/Banner";
import MyHeader from "@components/Header/Header";
import Info from "@components/Info/Info";
import AdvanceHeadling from "@components/AdvanceHeadling/AdvanceHeadling";
import HeadingListProducts from "@components/HeadingListProduct/HeadingListProducts";
import { useEffect, useState } from "react";
import { getProducts } from "@/apis/ProductsService";
import PopularProduct from "@components/PopularProduct/PopularProduct";
import SaleHomePage from "@components/SaleHomePage/SaleHomePage";
import MyFooter from "@components/Footer/Footer";

function HomePage() {
  const [listProducts, setListProducts] = useState([]);
  useEffect(() => {
    getProducts().then((res) => {
      setListProducts(res.contents);
    });
  }, []);
  return (
    <div>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadingListProducts data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, 10)} />
      <SaleHomePage />
      <MyFooter />
    </div>
  );
}

export default HomePage;
