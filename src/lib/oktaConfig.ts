export const oktaConfig = {
  clientId: process.env.REACT_APP_CLIENT_ID,
  issuer: process.env.REACT_APP_ISSUER,
  redirectUri:
    "https://blue-book-frontend-36443fa73b00.herokuapp.com/login/callback", // yeni Heroku URL
  scopes: ["openid", "profile", "email"],
  pkce: true,
  disableHttpsCheck: true,
};
