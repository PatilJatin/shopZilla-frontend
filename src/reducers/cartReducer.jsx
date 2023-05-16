const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { _id, pickColor, productsQuantity, product } = action.payload;

      let existingProduct = state.cart.find((ele) => {
        return ele._id === _id + pickColor;
      });

      if (existingProduct) {
        let updateCart = state.cart.map((ele) => {
          if (ele._id === _id + pickColor) {
            let newQuantity = ele.productsQuantity + productsQuantity;

            if (newQuantity >= ele.max) {
              newQuantity = ele.max;
            }
            return {
              ...ele,
              productsQuantity: newQuantity,
            };
          } else {
            return {
              ...ele,
            };
          }
        });

        return {
          ...state,
          cart: updateCart,
        };
      } else {
        let cartProduct = {
          _id:_id + pickColor,
          name: product.name,
          pickColor,
          productsQuantity,
          image: product.images[0].secure_url,
          price: product.price,
          max: product.stock,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter((ele) => {
        return ele._id != action.payload;
      });
      return {
        ...state,
        cart: updatedCart,
      };

    case "SET_INCREMENT":
      let updateProduct = state.cart.map((ele) => {
        if (ele._id === action.payload) {
          let newQuantity = ele.productsQuantity + 1;
          if (newQuantity >= ele.max) {
            newQuantity = ele.max;
          }
          return {
            ...ele,
            productsQuantity: newQuantity,
          };
        } else {
          return {
            ...ele,
          };
        }
      });

      return {
        ...state,
        cart: updateProduct,
      };
    case "SET_DECREMENT":
      let updateProduct1 = state.cart.map((ele) => {
        if (ele._id === action.payload) {
          let decrement = 1;
          if (ele.productsQuantity > 1) {
            decrement = ele.productsQuantity - 1;
          }
          return {
            ...ele,
            productsQuantity: decrement,
          };
        } else {
          return {
            ...ele,
          };
        }
      });

      return {
        ...state,
        cart: updateProduct1,
      };
    case "CART_TOTAL_PRICE":
      let totalPrice = state.cart.reduce((total, ele) => {
        let { price, productsQuantity } = ele;
        total += price * productsQuantity;
        return total;
      }, 0);
      return {
        ...state,
        total_amount: totalPrice,
      };

    case "CART_TOTAL_ITEM":
      let totalItem = state.cart.reduce((total, ele) => {
        let { productsQuantity } = ele;
        total += productsQuantity;
        return total;
      }, 0);
      return {
        ...state,
        total_item: totalItem,
      };
    default:
      return {
        ...state,
      };
  }
};

export default cartReducer;
