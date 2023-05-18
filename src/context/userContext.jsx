import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/userReducer";


const UserContext = createContext();
 

const initialState = {
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")) || false,
  userProfile: JSON.parse(localStorage.getItem("userProfile")) || {},
};

const UserProvider = ({ children }) => {
  const API = "https://shopzilla-z3p7.onrender.com/api/v1";
  const [state, dispatch] = useReducer(reducer, initialState);

  const setAuthStatusAndUserProfile = (status, userData) => {
    localStorage.setItem("isAuthenticated", JSON.stringify(status));
    localStorage.setItem("userProfile", JSON.stringify(userData));
    dispatch({
      type: "SET_AUTH_USER",
      payload: { isAuthenticated: status, userProfile: userData },
    });
  };

  const setToken = (token) => {
    localStorage.setItem("token", token);
  };
  const deleteToken = () => {
    localStorage.removeItem("token");
  };
  const getToken = () => {
    return localStorage.getItem("token");
  };
  const checkToken = () => {
    const token = localStorage.getItem("token");
    const isTokenPresent = !!token;
    return isTokenPresent;
  };

  const handleLogout = async () => {
    try {
       
      await axios.get(`${API}/logout`);
      deleteToken();
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("userProfile");
      setAuthStatusAndUserProfile(false, {}); // Update state with logged out status
    
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const isAuthenticated = JSON.parse(localStorage.getItem("isAuthenticated"));
    const userProfile = JSON.parse(localStorage.getItem("userProfile"));
    if (
      isAuthenticated !== initialState.isAuthenticated ||
      userProfile !== initialState.userProfile
    ) {
      dispatch({
        type: "SET_AUTH_USER",
        payload: { isAuthenticated, userProfile },
      });
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        ...state,
        setAuthStatusAndUserProfile,
        handleLogout,
        setToken,
        deleteToken,
        checkToken,
        getToken,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};
export { UserProvider, useUserContext };
