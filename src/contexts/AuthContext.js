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
  updateUserInfos: () => {},
});

export default AuthContext;
