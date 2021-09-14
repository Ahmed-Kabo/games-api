const detailState = {
  detail: {},
  screen: {},
  isLoading: true,
};

const detailReducer = (state = detailState, action) => {
  switch (action.type) {
    case "LOADING_GAME":
      return { ...state, isLoading: true };
    case "GAME_DETAIL":
      return {
        ...state,
        detail: action.payload.detail,
        screen: action.payload.screen,
        isLoading: false,
      };
    default:
      return { ...state };
  }
};
export default detailReducer;
