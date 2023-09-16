import { Auth0Provider, AppState } from "@auth0/auth0-react";
import React, { PropsWithChildren, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Auth0ProviderWithNavigateProps {
  children: React.ReactNode;
}

export const Auth0AppContext = createContext({
  userData: {},
  setUserData: (state: any) => {},
});

export function Auth0ProviderWithNavigate({
  children,
}: PropsWithChildren<Auth0ProviderWithNavigateProps>): JSX.Element | null {
  const [userData, setUserData] = useState();
  const value = { userData, setUserData };
  const navigate = useNavigate();

  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = process.env.REACT_APP_AUTH0_CALLBACK_URL;
  const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  if (!(domain && clientId && redirectUri && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        audience: audience,
        redirect_uri: redirectUri,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      <Auth0AppContext.Provider value={value as any}>
        {children}
      </Auth0AppContext.Provider>
    </Auth0Provider>
  );
}
