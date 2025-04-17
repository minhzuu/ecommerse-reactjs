import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { BsCart2 } from "react-icons/bs";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
function Cart() {
  const { container,total,boxBtn } = styles;
  return (
    <div className={container}>
      <div>
      <HeaderSideBar
        icon={<BsCart2 style={{ fontSize: "30px" }} />}
        title={"CART"}
      />
      <ItemProduct />
      </div>
      <div>
        <div className={total}> 
          <p>SUBTOTAL</p>
          <p>$199</p>
        </div>
        <div className={boxBtn}>
        <Button content={"VIEW CART"} />
        <Button content={"CHECKOUT"} isPrimary={false} />
        </div>
       
      </div>
    </div>
  );
}

export default Cart;
