import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

const GameDetails = () => {
  const { game, screen, isLoading } = useSelector((state) => state.detail);
  return (
    <DetailShadow>
      <DetailContianer>ahmed</DetailContianer>
    </DetailShadow>
  );
};

const DetailShadow = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
`;
const DetailContianer = styled(motion.div)`
  margin: 5rem auto;
  width: 70%;
  background: #fff;
  border-radius: 3rem;
`;
export default GameDetails;
