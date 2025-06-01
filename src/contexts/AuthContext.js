import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  token: true,
  userInfos: {},
  userFavorites: [],
  userMessages: [],
  login: () => {},
  logout: () => {},
  sendMsgToOwner: () => {},
});

export default AuthContext;
