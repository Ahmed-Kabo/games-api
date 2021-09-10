import styled from "styled-components";

const Game = ({ id, name, released, img }) => {
  return (
    <GameSection>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{released}</p>
    </GameSection>
  );
};

const GameSection = styled.div`
  border-radius: 1rem;
  box-shadow: 0 5px 7px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  min-height: 40vh;
  text-align: center;
  background: #121212;
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
