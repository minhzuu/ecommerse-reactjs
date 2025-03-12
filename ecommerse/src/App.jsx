import { useState } from "react";
import MainLayout from "@components/Layout/Layout";
import MyHeader from "@components/Header/Header";
import MyFooter from "@components/Footer/Footer";
import MyButton from "./components/Button/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MainLayout>
        <MyHeader />
        
      </MainLayout>
    </>
  );
}

export default App;
