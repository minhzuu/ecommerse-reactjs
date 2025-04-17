import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { CiHeart } from "react-icons/ci";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
function Wishlist() {
  const { container,boxBtn } = styles;
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<CiHeart style={{ fontSize: "30px" }} />}
          title="WISHLIST"
        />
        <ItemProduct />
      </div>
      <div className={boxBtn}>
        <Button content={"VIEW WISHLIST"} />
        <Button content={"ADD ALL TO CART"} isPrimary={false} />
      </div>
    </div>
  );
}

export default Wishlist;
