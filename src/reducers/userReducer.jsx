const UserReducer = (state, action) => {
  switch (action.type) {
    case "SET_AUTH_USER":
      return {
        ...state,
        isAuthenticated: action.payload.isAuthenticated,
        userProfile: action.payload.userProfile,
      };
    default:
      return {
        ...state,
      };
  }
};
export default UserReducer;
