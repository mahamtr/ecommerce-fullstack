import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext, useEffect } from "react";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./guards/AuthenticationGuard";
import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import CheckoutForm from "./components/Checkout/CheckoutForm/CheckoutForm";
import Payment from "./components/Payment/Payment";
import { Auth0AppContext } from "./providers/Auth0Provider";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import LayoutWrapper from "./components/Layout/LayoutWrapper/LayoutWrapper";

export function App() {
  const { isLoading, user } = useAuth0();
  const { userData, setUserData } = useContext(Auth0AppContext);

  useEffect(() => {
    setUserData(user);
    debugger;
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
      <Route
        path="/"
        element={
          <LayoutWrapper>
            <HomePage />
          </LayoutWrapper>
        }
      />
      <Route
        path="/checkout"
        element={<AuthenticationGuard component={CheckoutForm} />}
      />
      <Route path="/payment" element={<Payment />} />
      <Route
        path="/item"
        element={
          <LayoutWrapper>
            <ItemDetail />
          </LayoutWrapper>
        }
      />
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}
