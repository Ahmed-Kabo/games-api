import { useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router";

const GameDetails = ({ pathId }) => {
  const history = useHistory();

  const exitShadow = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };
  const { detail, screen, isLoading } = useSelector((state) => state.detail);

  return (
    <>
      {!isLoading && (
        <DetailShadow className="shadow" onClick={exitShadow}>
          <DetailContianer layoutId={pathId}>
            <div className="image">
              <motion.img src={detail.background_image} alt={detail.name} />
            </div>
            <motion.h2>{detail.name}</motion.h2>
            <div className="rating">
              <p> Rating : {detail.rating}</p>
              <div className="platform">
                {detail.platforms.map((item) => (
                  <span key={item.platform.id}>{item.platform.name}</span>
                ))}
              </div>
            </div>
            <div className="desc">{detail.description_raw}</div>
            <div className="media">
              {screen.results.map((img) => (
                <img key={img.id} src={img.image} alt="img" />
              ))}
            </div>
            <div className="platform">{}</div>
          </DetailContianer>
        </DetailShadow>
      )}
    </>
  );
};

const DetailShadow = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.8);
  margin: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #7c01b6;
    height: 0.8rem;
    border-radius: 2rem;
  }
  &::-webkit-scrollbar-track {
    background: #222;
  }
`;
const DetailContianer = styled(motion.div)`
  margin: 5rem auto;
  padding: 3rem;
  width: 80%;
  background: #121212;
  border-radius: 3rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  color: #eee;
  .image {
    height: 70vh;
    overflow: hidden;
    img {
      object-fit: cover;
      object-position: center;
      height: 100%;
      border-radius: 3rem 3rem 0 0;
    }
  }
  h2 {
    text-align: center;
    margin: 1.5rem 0;
    font-size: 2.5rem;
    color: #222;
  }
  .rating {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 0;
    p {
      font-size: 1.1rem;
      color: #0097c5;
    }
  }
  .desc {
    margin: 2rem 0;
    font-size: 1.1rem;
    color: #444;
    text-align: justify;
  }
  img {
    width: 100%;
    display: block;
  }
`;
export default GameDetails;
