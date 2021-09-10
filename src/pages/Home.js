import leadGames from "../Actions/gamesAction";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
const Home = () => {
  // to git the data from the reducer
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(leadGames());
  }, [dispatch]);

  // to get the data from leadgames
  const { popular, newgames, upcoming } = useSelector((state) => state.games);
  return (
    <GamesContainer>
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

      <h1>popular games </h1>
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

      <h1>popular games </h1>
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
  padding: 3rem 5rem;
  width: 90%;
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 3rem;
  width: 100%;
`;

export default Home;
