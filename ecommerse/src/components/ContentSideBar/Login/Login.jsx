import InputCommon from "@components/InputCommon/InputCommon";
import styles from "./styles.module.scss";
import Button from "@components/Button/Button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { use, useContext, useState } from "react";
import { ToastContext } from "@/contexts/ToastProvider";
import { register, signIn, getInfo } from "@/apis/authService";
import Cookies from "js-cookie";
import { SideBarContext } from "@/contexts/SideBarProvider";
import { StoreContext } from "@/contexts/storeProvider";
function Login() {
  const { container, title, boxRememberMe, lostPW } = styles;
  const [isRegister, setIsRegister] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useContext(ToastContext);
  const { setIsOpen } = useContext(SideBarContext);
  const { setUserId } = useContext(StoreContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      cfmpassword: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
      cfmpassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
      ),
    }),
    onSubmit: async (values) => {
      if (isLoading) {
        return;
      }
      const { email: username, password } = values;
      if (isRegister) {
        setIsLoading(true);
        await register({ username, password })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
          });
      }
      if (!isRegister) {
        await signIn({ username, password })
          .then((res) => {
            setIsLoading(false);
            const { id, token, refreshToken } = res.data;
            setUserId(id);
            Cookies.set("token", token);
            Cookies.set("refreshToken", refreshToken);
            Cookies.set("userId", id);
            toast.success("Login successfully");
            window.location.reload();
            setIsOpen(false);
          })
          .catch((err) => {
            toast.error("Login failed");
            setIsLoading(false);
          });
      }
    },
  });

  const handleToggle = () => {
    setIsRegister(!isRegister);
    formik.resetForm();
  };

  // useEffect(() => {}{
  //    getInfo()
  // },[])
  return (
    <div className={container}>
      <div className={title}>{isRegister ? "SIGN UP" : "LOG IN"}</div>
      <form onSubmit={formik.handleSubmit}>
        <InputCommon
          id="email"
          label="Email"
          type="email"
          isRequired
          formik={formik}
        />

        <InputCommon
          id="password"
          label="Password"
          type="password"
          isRequired
          formik={formik}
        />

        {isRegister && (
          <InputCommon
            id="cfmpassword"
            label="Confirm Password"
            type="password"
            isRequired
            formik={formik}
          />
        )}
        {!isRegister && (
          <div className={boxRememberMe}>
            <input type="checkbox" />
            <span>Remember me</span>
          </div>
        )}

        <Button
          content={isLoading ? "Loading" : isRegister ? "REGISTER" : "LOGIN"}
          type="submit"
        />
        <Button
          content={
            isRegister ? "Already have an account" : "Don't have an account"
          }
          type="submit"
          isPrimary={false}
          style={{ marginTop: "10px" }}
          onClick={handleToggle}
        />
      </form>
      {!isRegister && <div className={lostPW}>Lost your password ?</div>}
    </div>
  );
}

export default Login;
