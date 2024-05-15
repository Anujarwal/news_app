export const NewsReduser = (state, action) => {
  switch (action.type) {
    case "GET_NEWS":
      return {
        ...state,
        newsAll: action.payload,
      };
  }
};

export default NewsReduser;
