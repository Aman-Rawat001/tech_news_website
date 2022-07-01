export const SearchTermReducer = (state = {}, action) => {
  switch (action.type) {
    case "SEARCHTEXT":
      return { ...action.payload };
    default:
      return state;
  }
};
