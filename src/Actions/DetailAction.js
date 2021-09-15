import axios from "axios";
import { gameDetailURL, gameScreeShotURL } from "../api";

const loadDetails = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_GAME",
  });
  const DetailData = await axios.get(gameDetailURL(id));
  const screenData = await axios.get(gameScreeShotURL(id));

  dispatch({
    type: "GAME_DETAIL",
    payload: {
      detail: DetailData.data,
      screen: screenData.data,
    },
  });
};
export default loadDetails;
