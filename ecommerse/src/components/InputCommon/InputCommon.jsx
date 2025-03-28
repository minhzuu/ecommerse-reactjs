import { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

function InputCommon({ label, type, isRequired = false }) {
  const { labelInput, boxInput, container, boxIcon } = styles;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const isShowTextPassword = type === "password" && showPassword ? "text" : type;
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <LuEyeOff /> : <MdOutlineRemoveRedEye />}
          </div>
        )}
      </div>
    </div>
  );
}

export default InputCommon;
