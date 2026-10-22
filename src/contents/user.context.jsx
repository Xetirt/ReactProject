import { createContext, useState } from "react";
const UserContext = createContext();
function UserProviderWrapper(props){
    const [user, setUser] = useState(null);
  const userData = {
    name: "Carlos",
    email: "crb.carlos@gmail.com",
    isAdmin: true
  }
  const login = () => {
    setUser(userData);
  }
  const logout = () => {
    setUser(userData);
  }
    return(
        <UserContext.Provider value={{user, setUser, login, logout}}>
            {props.children}
        </UserContext.Provider>
    );
}
export { UserContext, UserProviderWrapper };