import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: true,
  userInfos: {},
  userFavorites: [],
  login: () => {},
  logout: () => {},
});

export default AuthContext;
