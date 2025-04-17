import { useContext, useState } from "react";
import styles from "../styles.module.scss";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/storeProvider";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
function Menu({ content, href }) {
  const { setIsOpen, setType } = useContext(SideBarContext);
  const { menu, subMenu } = styles;
  const { userInfo, handleLogOut } = useContext(StoreContext);
  const [isShowSubMenu, setIsShowSubMenu] = useState(false);
  const navigate = useNavigate();
  const handleClickShowLogin = () => {
    if (content === "Sign in" && !userInfo) {
      setIsOpen(true);
      setType("login");
    }
    if (content === "Our shop") {
      navigate("/shop");
    }
  };
  const handleRenderText = (content) => {
    if (content === "Sign in" && userInfo) {
      {
        return "Hello " + userInfo.username;
      }
    } else {
      return content;
    }
  };
  const handleHover = () => {
    // console.log(content);
    if (content === "Sign in" && userInfo) {
      setIsShowSubMenu(true);
    }
  };

  return (
    <div
      className={menu}
      onClick={handleClickShowLogin}
      onMouseOver={handleHover}
    >
      {handleRenderText(content)}
      {isShowSubMenu && (
        <div
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
          onClick={handleLogOut}
        >
          Log Out
        </div>
      )}
    </div>
  );
}

export default Menu;
