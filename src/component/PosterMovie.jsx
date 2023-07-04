import styles from "./posterMovie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function PosterMovie(props) {
  const navigate = useNavigate();
  const headLink = "https://image.tmdb.org/t/p/original";

  const handleClick = () => {
    navigate(`/info/${props.data.id}`);
  };

  return (
    <div className={"me-3 mb-3 " + styles.movie} onClick={handleClick}>
      <img
        src={headLink + props.data.poster_path}
        className={styles.img}
        alt="movie"
      />
      <FontAwesomeIcon icon={faPlay} className={styles.icon} size="2xl" />
      <p className={styles.title}>{props.data.title}</p>
    </div>
  );
}

export default PosterMovie;
