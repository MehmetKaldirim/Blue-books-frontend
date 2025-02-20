//import { OktaAuth, StorageType, OAuthResponseMode } from "@okta/okta-auth-js";

export const oktaConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  issuer: process.env.REACT_APP_ISSUER,
  redirectUri: "https://localhost:3000/login/callback",
  //   responseMode: "query" as OAuthResponseMode, // 🔹 Çerez kullanımını azaltır
  //   storageManager: {
  //     token: {
  //       storageTypes: ["sessionStorage"] as StorageType[], // 🔹 Sadece sessionStorage kullan
  //     },
  //     cache: {
  //       storageTypes: ["localStorage"] as StorageType[], // 🔹 Cache için localStorage kullan
  //     },
  //   },
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};

//const oktaAuth = new OktaAuth(oktaConfig);
