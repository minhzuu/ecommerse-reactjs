import HeaderSideBar from "@components/ContentSideBar/Components/HeaderSideBar/HeaderSideBar";
import styles from "./styles.module.scss";
import { TfiReload } from "react-icons/tfi";
import ItemProduct from "@components/ContentSideBar/Components/ItemProduct/ItemProduct";
function compare() {
  const { container } = styles;
  return (
    <div className={container}>
      <HeaderSideBar
        icon={<TfiReload style={{ fontSize: "30px" }} />}
        title="COMPARE"
      />
      <ItemProduct />
    </div>
  );
}

export default compare;
