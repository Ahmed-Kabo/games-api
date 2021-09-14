import axios from "axios";
import { gameDetailURL, gameScreeShotURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_GAME",
  });
  const DetailData = await axios.git(gameDetailURL(id));
  const screenData = await axios.git(gameScreeShotURL(id));

  dispatch({
    type: "GAME_DETAIL",
    payload: {
      detail: DetailData.data.results,
      screen: screenData.data.results,
    },
  });
};
export default loadDetails;
