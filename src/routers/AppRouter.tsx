import { Suspense } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { routesConstatnt } from "./RoutesContsnts";
import Header from "../components/header";
import Loader from "../components/common/loader";
import LoginPage from "../pages/loginPage";
import { useAppSelector } from "../redux/hooke";
import LayoutContent from "../components/layout";
import Notification from "../components/common/notification";
import QuestionModel from "../components/common/questionModel";

const AppRoutes = () => {
  const adminIsLoggedIn = useAppSelector(
    (state) => state.admin.adminIsLoggedIn
  );

  return (
    <>
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            {adminIsLoggedIn ? (
              <>
                <Route
                  path="/*"
                  element={
                    <div>
                      <Header />
                      <LayoutContent>
                        <Routes>
                          {routesConstatnt.map((route) => (
                            <Route
                              key={route.path}
                              path={route.path}
                              element={route.element}
                            />
                          ))}
                        </Routes>
                      </LayoutContent>
                    </div>
                  }
                />
                <Route path="/login" element={<Navigate to="/" />} />
              </>
            ) : (
              <>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Navigate to="/login" />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </Suspense>
      <Notification />
      <QuestionModel />
    </>
  );
};

export default AppRoutes;
