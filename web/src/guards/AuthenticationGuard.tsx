import { withAuthenticationRequired } from "@auth0/auth0-react";
import React, { ComponentType } from "react";
import { PageLoader } from "../components/page-loader";

interface AuthenticationGuardProps {
  component: ComponentType;
}

export function AuthenticationGuard({ component }: AuthenticationGuardProps) {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  });

  return <Component />;
}
