import { CiBoxList } from "react-icons/ci";
import { TfiLayoutGrid4 } from "react-icons/tfi";
import styles from "../styles.module.scss";
import cls from "classnames";
import { useContext } from "react";
import { OurShopContext } from "@contexts/OurShopProvider";
import SelectBox from "@pages/OurShop/components/SelectBox";
function Filter() {
  const { showOptions, sortOptions, setSortId, setShowId, setIsShowGrid } =
    useContext(OurShopContext);
  const { containerFilter, boxIcon, boxLeft, selectBox, show, sort } = styles;

  const getValueSelect = (value, type) => {
    if (type === "sort") {
      setSortId(value);
    } else if (type === "show") {
      setShowId(value);
    }
  };
  const handleGetShowGrid = (type) => {
    if(type === "grid") {
      setIsShowGrid(true);
    }
    else if(type === "list") {
      setIsShowGrid(false);
    }
  }
  return (
    <div className={containerFilter}>
      <div className={boxLeft}>
        {/* <select className={cls(selectBox,sort)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        <SelectBox
          options={sortOptions}
          getValue={getValueSelect}
          type="sort"
        />
        <div className={boxIcon}>
          <TfiLayoutGrid4 style={{ fontSize: "20px", cursor: "pointer" }} onClick={()=>{handleGetShowGrid("grid")}} />
          <div
            style={{ height: "20px", width: "1px", backgroundColor: "#e1e1e1" }}
          ></div>
          <CiBoxList style={{ fontSize: "27px", cursor: "pointer" }} onClick={()=>{handleGetShowGrid("list")}} />
        </div>
      </div>
      <div className={boxLeft}>
        <div style={{ fontSize: "14px", color: "#555" }}>Show</div>
        {/* <select className={cls(selectBox,show)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select> */}
        <SelectBox
          options={showOptions}
          getValue={getValueSelect}
          type="show"
        />
      </div>
    </div>
  );
}

export default Filter;
