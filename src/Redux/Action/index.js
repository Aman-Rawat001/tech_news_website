export const setStories = (data) => {
  return {
    type: "FETCHSTORIES",
    payload: data,
  };
};
export const removeStory = (id) => {
  // console.log("removestoryactionacall", id);
  return {
    type: "REMOVESTORY",
    payload: id,
  };
};
export const getSearchTerm = (text) => {
  return {
    type: "SEARCHTEXT",
    payload: text,
  };
};
export const incPageNo = () => {
  return {
    type: "INCPAGING",
  };
};
export const decPageNo = () => {
  return {
    type: "DECPAGING",
  };
};
