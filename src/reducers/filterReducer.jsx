const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      const priceArr = [...action.payload].map((ele) => ele.price);
      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);
      return {
        ...state,
        filterProducts: [...action.payload],
        allProducts: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
        },
      };
    case "GET_SORT_VALUE":
      return {
        ...state,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let tempSortProduct = [...state.filterProducts];
      if (state.sorting_value === "A-to-Z") {
        newSortData = tempSortProduct.sort((a, b) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "Z-to-A") {
        newSortData = tempSortProduct.sort((b, a) => {
          return a.name.localeCompare(b.name);
        });
      }
      if (state.sorting_value === "lowest") {
        const sorting = (a, b) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sorting);
      }
      if (state.sorting_value === "highest") {
        const sorting = (b, a) => {
          return a.price - b.price;
        };
        newSortData = tempSortProduct.sort(sorting);
      }
      return {
        ...state,
        filterProducts: newSortData,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCT":
      let { allProducts } = state;
      let tempFilterProduct = [...allProducts];
      const { text, category, company, color, price } = state.filters;
      if (text) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.name.toLowerCase().includes(text);
        });
      }
      if (category.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.category === category;
        });
      }
      if (company.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (color.toLowerCase() !== "all") {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.colors.includes(color);
        });
      }
      if (price) {
        tempFilterProduct = tempFilterProduct.filter((ele) => {
          return ele.price <= price;
        });
      }
      return {
        ...state,
        filterProducts: tempFilterProduct,
      };

    case "CLEAR_FILTER":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "All",
          company: "All",
          color: "All",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };
    default:
      return {
        ...state,
      };
  }
};
export default filterReducer;
