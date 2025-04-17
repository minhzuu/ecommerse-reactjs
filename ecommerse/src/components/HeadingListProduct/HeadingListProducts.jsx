import MainLayout from "@components/Layout/Layout";
import styles from "./styles.module.scss";
import CountDownBanner from "@components/CountDownBanner/CountDownBanner";
import ProductItem from "@components/ProductItem/ProductItem";
function HeadingListProducts({ data }) {
  const { container, containerItem } = styles;
  return (
    <MainLayout>
      <div className={container}>
        <CountDownBanner />
        <div className={containerItem}>
          {data.map((item , index) => (
            <ProductItem
              key={index}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}

export default HeadingListProducts;
