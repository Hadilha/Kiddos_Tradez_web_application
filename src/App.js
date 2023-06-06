import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";

import Aboutus from "./Pages/Aboutus/Aboutus";
import Signin from "./Pages/Signin/Signin";
import Discover from "./Pages/Discover/Discover";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Forgotpassword from "./Pages/Forgotpassword/Forgotpassword";
import Conditionsandterms from "./Components/Conditionsandterms/Conditionsandterms";
import Profile from "./Pages/profile/Profile";
import Resetpassword from "./Pages/ResetPassword/ResetPassword";
import { store, persistor } from "./redux/Store";

import { PersistGate } from "redux-persist/integration/react";
import Product from "./Pages/Product/Product";
import Profilenonconnected from "./Pages/Profilenonconnected/Profilenonconnected";
import Modifyproduct from "./Components/Modifyproduct/Modifyproduct";
import Test from "./Test/Test";
import Dashboard from "./Pages/Dashboard/Dashboard";
import { useSelector } from "react-redux";

function isUserSignedUp() {
  return localStorage.getItem("username") && localStorage.getItem("password");
}

function AppRouting({ IsSignedUp, setIsSignedUp }) {
  const admin = useSelector((state) => state.admin);
  const paths = [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <Signin setIsSignedUp={setIsSignedUp} />,
      requiresAuth: false,
    },
    {
      path: "/signup",
      element: <Signup setIsSignedUp={setIsSignedUp} />,
      requiresAuth: false,
    },
    {
      path: "/profile",
      element: <Profile setIsSignedUp={setIsSignedUp} />,
      requiresAuth: true,
    },
    {
      path: "/aboutus",
      element: <Aboutus />,
    },
    {
      path: "/forgotpassword",
      element: <Forgotpassword />,
      requiresAuth: false,
    },
    {
      path: "/resetpassword",
      element: <Resetpassword />,
      requiresAuth: false,
    },
    {
      path: "/condition",
      element: <Conditionsandterms />,
      requiresAuth: false,
    },
    {
      path: "/discover",
      element: <Discover />,
    },
    {
      path: "/product",
      element: <Product />,
    },
    {
      path: "/profilenonconnected",
      element: <Profilenonconnected />,
    },
    {
      path: "/modifyproduct",
      element: <Modifyproduct />,
    },
    {
      path: "/dashboard",
      element: admin ? <Dashboard /> : <Route to="/signin" />,
      requiresAuth: true,
    },
  ];

  return (
    <>
      <Routes>
        {paths.map(({ path, element, requiresAuth }) => (
          <Route
            key={path}
            exact
            path={path}
            element={
              requiresAuth && !IsSignedUp ? <Route to="/signin" /> : element
            }
          />
        ))}
      </Routes>
    </>
  );
}

function App() {
  const [IsSignedUp, setIsSignedUp] = useState(isUserSignedUp());
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRouting IsSignedUp={IsSignedUp} setIsSignedUp={setIsSignedUp} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
