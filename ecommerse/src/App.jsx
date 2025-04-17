import Blog from "@components/Blog/Blog";
import HomePage from "@components/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "@/routers/routers";
import { Suspense } from "react";
import { SideBarProvider } from "@/contexts/SideBarProvider";
import SideBar from "@components/SideBar/SideBar";
import { ToastProvider } from "@/contexts/ToastProvider";
import { StoreProvider } from "@/contexts/storeProvider";
function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SideBarProvider>
          <SideBar />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routers.map((item, index) => {
                  return (
                    <Route
                      key={index}
                      path={item.path}
                      element={<item.component />}
                    />
                  );
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SideBarProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
