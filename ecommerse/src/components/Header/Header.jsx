import BoxIcon from "./BoxIcon/BoxIcon";
import { dataBoxIcon, dataMenu } from "./constants";
import Menu from "./Menu/Menu";
import styles from "./styles.module.scss";
import Logo from "@icons/images/logostore.png";
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import useScrollHandling from "@/hooks/useScrollHandling";
import { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { SideBarContext } from "@/contexts/SideBarProvider";
function MyHeader() {
  const {
    containerBoxIcon,
    containerMenu,
    containerHeader,
    containerBox,
    container,
    fixedHeader,
    topHeader,
  } = styles;
  const { scrollPosition } = useScrollHandling();
  const [fixedPosition, setFixedPosition] = useState(false);

  const { setIsOpen,setType } = useContext(SideBarContext);
  const handleOpenSideBar = (type) => {
    setIsOpen(true);
    setType(type);
  }
  useEffect(() => {
    // if(scrollPosition > 90){
    //   setFixedPosition(true);
    // }
    // else{
    //   setFixedPosition(false);
    //   }
    // setFixedPosition(scrollPosition > 90 ? true : false);
    setFixedPosition(scrollPosition > 90);
  }, [scrollPosition]);
  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition,
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => {
              return <BoxIcon key={index} type={item.type} href={item.href} />;
            })}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => {
              return (
                <Menu key={index} content={item.content} href={item.href} />
              );
            })}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "153px", height: "53px" }}
          />
        </div>
        <div className={containerBox}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => {
              return (
                <Menu
                  key={index + 3}
                  content={item.content}
                  href={item.href}
                  setIsOpen={setIsOpen}
                />
              );
            })}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload onClick={()=> {handleOpenSideBar("compare") }} style={{ fontSize: "20px" }} />
            <CiHeart onClick={()=> {handleOpenSideBar("wishlist") }} style={{ fontSize: "20px" }} />
            <BsCart3 onClick={()=> {handleOpenSideBar("cart") }} style={{ fontSize: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyHeader;
