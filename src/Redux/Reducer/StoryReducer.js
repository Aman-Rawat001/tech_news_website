const initialState = {};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCHSTORIES":
      return { ...state, ...action.payload };

    case "REMOVESTORY":
      return {
        ...state,
        hits: state.hits.filter(
          (currElem) => currElem.objectID !== action.payload
        ),
      };
    case "INCPAGING":
      return { ...state, page: state.page + 1 };
    case "DECPAGING":
      return { ...state, page: state.page - 1 };
    default:
      return {
        ...state,
        page: 0,
      };
  }
};
