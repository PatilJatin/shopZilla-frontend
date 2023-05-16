import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducers/filterReducer";
const FilterContext = createContext();
const initialState = {
  filterProducts: [],
  allProducts: [],
  sorting_value: "lowest",
  filters: {
    text: "",
    category: "All",
    company: "All",
    color: "All",
    maxPrice: 0,
    price: 0,
    minPrice: 0,
  },
};

export const FilterContextProvider = ({ children }) => {
  const { product } = useProductContext();

  const [state, dispatch] = useReducer(reducer, initialState);

  const sorting = (event) => {
    let userValue = event.target.value;
    dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  };
  const updateFilter = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTER_VALUE", payload: { name, value } });
  };
  const clearFilter = () => {
    dispatch({ type: "CLEAR_FILTER" });
  };
  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCT" });
    dispatch({ type: "SORTING_PRODUCTS", payload: product });
  }, [product, state.sorting_value, state.filters]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: product });
  }, [product]);

  return (
    <FilterContext.Provider
      value={{ ...state, sorting, updateFilter, clearFilter }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
