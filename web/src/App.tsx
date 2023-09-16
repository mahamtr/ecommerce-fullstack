import { Auth0Context, useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./guards/AuthenticationGuard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";
import CheckoutForm from "./components/Checkout/CheckoutForm/CheckoutForm";
import Payment from "./components/Payment/Payment";
import { Auth0AppContext } from "./providers/Auth0Provider";

export function App() {
  const { isLoading, user } = useAuth0();
  const { userData, setUserData } = useContext(Auth0AppContext);
  console.log("user: " + JSON.stringify(userData));

  useEffect(() => {
    setUserData(user);
    console.log(user);
  }, [user]);

  if (isLoading) {
    return (
      <div className="page-layout">
        <PageLoader />
      </div>
    );
  }
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/checkout"
        element={<AuthenticationGuard component={CheckoutForm} />}
      />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}
