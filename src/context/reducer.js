const Reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_LINK":
      return {
        ...state,
        link: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
