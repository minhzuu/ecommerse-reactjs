import styles from "./styles.module.scss";
import reLoadIcon from "@icons/svgs/reloadIcon.svg";
import heartIcon from "@icons/svgs/heartIcon.svg";
import cartIcon from "@icons/svgs/cartIcon.svg";

function ProductItem({ src, prevSrc, name, price }) {
  const {
    boxImg,
    showImgWhenHover,
    showFncWhenHover,
    boxIcon,
    title,
    priceCl,
  } = styles;

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  return (
    <div>
      <div className={boxImg}>
        <img src={src} alt="" />
        <img src={prevSrc} alt="" className={showImgWhenHover} />
        <div className={showFncWhenHover}>
          <div className={boxIcon}>
            <img src={cartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={heartIcon} alt="" />
          </div>
          <div className={boxIcon}>
            <img src={reLoadIcon} alt="" />
          </div>
        </div>
      </div>
      <div className={title}>{name}</div>
      <div className={priceCl}>{formatPrice(price)}</div>
    </div>
  );
}

export default ProductItem;
