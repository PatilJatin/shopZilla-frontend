import axios from "axios";
import { createContext } from "react";
import { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/productReducer";
const AppContext = createContext();
const API = "http://65.2.175.146:4000/api/v1/getAllProducts";
const initialState = {
  isAuthenticated: false,
  isLoading: false,
  isError: false,
  product: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getPrdoucts = async (URL) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(URL);
      console.log(response);
      const products = await response?.data?.products;
      dispatch({ type: "Top_PRODUCT_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (URL) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(URL);
      console.log(response.data);
      const singleProduct = await response?.data?.product;
      console.log(singleProduct);
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  useEffect(() => {
    getPrdoucts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useProductContext };
