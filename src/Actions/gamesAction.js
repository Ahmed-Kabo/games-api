import axios from "axios";
import { upComingGamesURL, newGamesURL, popularGamesURL } from "../api";

const leadGames = () => async (dispatch) => {
  const newDatagames = await axios.get(newGamesURL());
  const upcomingDatagames = await axios.get(upComingGamesURL());
  const popularDatagames = await axios.get(popularGamesURL());
  dispatch({
    type: "FACH_GAME",
    payload: {
      newgames: newDatagames.data.results,
      upcoming: upcomingDatagames.data.results,
      popular: popularDatagames.data.results,
    },
  });
};
export default leadGames;
