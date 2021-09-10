const initalState = {
  popular: [],
  newgames: [],
  upcoming: [],
  search: [],
};

const GameReducer = (state = initalState, action) => {
  switch (action.type) {
    case "FACH_GAME":
      return {
        ...state,
        popular: action.payload.popular,
        newgames: action.payload.newgames,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};
export default GameReducer;
