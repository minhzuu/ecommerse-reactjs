import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
import Button from "@components/Button/Button";
function compare() {
  const { container,boxContent } = styles;
  return (
    <div className={container}>
      <div className={boxContent}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: "30px" }} />}
        title="COMPARE"
      />
      <ItemProduct />
      </div>

      <div>
        <Button content={"Compare"}  />
      </div>
    </div>
  );
}

export default compare;
