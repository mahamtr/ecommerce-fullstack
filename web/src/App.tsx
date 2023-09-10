import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { PageLoader } from "./components/page-loader";
import { AuthenticationGuard } from "./components/authentication-guard";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./components/HomePage";

export function App() {
  const { isLoading } = useAuth0();

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
      {/* <Route
        path="/profile"
        element={<AuthenticationGuard component={ProfilePage} />}
      /> */}
      <Route path="*" element={<div>not found</div>} />
    </Routes>
  );
}
