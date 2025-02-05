export const oktaConfig = {
  clientId: "0oan716v224EyAjpv5d7",
  issuer: "https://dev-81056119.okta.com/oauth2/default",
  redirectUri: "http://localhost:3000/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
