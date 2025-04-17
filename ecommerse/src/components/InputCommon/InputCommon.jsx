import { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { LuEyeOff } from "react-icons/lu";

function InputCommon({ label, type, isRequired = false,...props }) {
  const { labelInput, boxInput, container, boxIcon,errMsg } = styles;
  const { formik,id } = props;
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  }
  const isErr = formik.touched[id] && formik.errors[id];
  const messErr = formik.errors[id];
  const isShowTextPassword = type === "password" && showPassword ? "text" : type;
  return (
    <div className={container}>
      <div className={labelInput}>
        {label} {isRequired && <span>*</span>}
      </div>
      <div className={boxInput}>
        <input type={isShowTextPassword} {...props} 
         onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          value={formik.values[id]}
           />
        {isPassword && (
          <div className={boxIcon} onClick={handleShowPassword}>
            {showPassword ? <LuEyeOff /> : <MdOutlineRemoveRedEye />}
          </div>
        )}

        {isErr && <div className={errMsg}>{messErr}</div>}
       
      </div>
    </div>
  );
}

export default InputCommon;
