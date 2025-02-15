import React from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routesConstatnt } from "./RoutesContsnts";
import Header from "../components/header";
import Loader from "../components/common/loader";
import LoginPage from "../pages/loginPage";
import { useAppSelector } from "../redux/hooke";
import LayoutContent from "../components/layout";
import Notification from "../components/common/notification";

const AppRoutes = () => {
  const adminIsLoggedIn = useAppSelector((state) => state.admin.adminIsLoggedIn);

  return (
    <>

      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          {adminIsLoggedIn ? (
            <div>
              <Header />
              <LayoutContent>
                <Routes>
                  <>
                    {routesConstatnt.map((route) => (
                      <Route key={route.path} path={route.path} element={route.element} />
                    ))}
                    <Route path="/login" element={<Navigate to="/" />} />
                  </>
                </Routes>
              </LayoutContent>
            </div>
          ) : (
            <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="*" element={<Navigate to="/login" />} />
            </Routes>
          )}
        </BrowserRouter>
      </Suspense>
      <Notification />
    </>
  );
};

export default AppRoutes;
