import leadGames from "../Actions/gamesAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
import { useLocation } from "react-router";
import GameDetails from "../components/GameDetail";

const Home = () => {
  //start get a id path from
  // const location = useLocation();
  // const pathId = location.pathname.split("/")[2];

  // to git the data from the reducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leadGames());
  }, [dispatch]);

  // to get the data from leadgames
  const { popular, newgames, upcoming } = useSelector((state) => state.games);
  return (
    <GamesContainer>
      {/* {pathId && <GameDetails />} */}
      <h1>popular games </h1>
      <Games>
        {popular.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>

      <h1>new games </h1>
      <Games>
        {newgames.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>

      <h1>upcoming games </h1>
      <Games>
        {upcoming.map((game) => (
          <Game
            id={game.id}
            key={game.id}
            name={game.name}
            released={game.released}
            img={game.background_image}
          />
        ))}
      </Games>
    </GamesContainer>
  );
};

const GamesContainer = styled.section`
  padding: 3rem 5%;
  width: 90%;
  margin: auto;
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 3rem;
  width: 100%;
`;

export default Home;
