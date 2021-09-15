import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import loadDetails from "../Actions/DetailAction";
const Game = ({ id, name, released, img }) => {
  const dispatch = useDispatch();
  const toString = id.toString();
  const loadDetailsHandelar = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetails(id));
  };

  return (
    <GameSection onClick={loadDetailsHandelar} layoutId={toString}>
      <Link to={`/game/${id}`}>
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p>{released}</p>
      </Link>
    </GameSection>
  );
};

const GameSection = styled(motion.div)`
  border-radius: 1rem;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.3);

  min-height: 45vh;
  text-align: center;
  background: #121212;
  overflow: hidden;
  a {
    text-decoration: none;
    color: inherit;
  }
  img {
    width: 100%;
    height: 27vh;
    object-fit: cover;
  }
  h2 {
    margin: 1rem 0;
  }
`;
export default Game;
