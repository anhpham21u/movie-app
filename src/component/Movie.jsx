import styles from "./movie.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Movie(props) {
  const navigate = useNavigate();
  const headLink = "https://image.tmdb.org/t/p/original";

  const handleClick = () => {
    navigate(`/movie-app/info/${props.data.id}`);
  };

  return (
    <div
      className={
        props.first === false
          ? "me-3 mb-3 " + styles.movie
          : "me-3 mb-5 d-lg-flex"
      }
    >
      {props.first === true ? (
        <>
          <div className={styles.movie2} onClick={handleClick}>
            <img
              src={headLink + props.data.backdrop_path}
              className={styles.img}
              alt="movie"
            />
            <FontAwesomeIcon icon={faPlay} className={styles.icon} size="2xl" />
          </div>

          <div className={styles.description}>
            <Link
              className={"fw-bold fs-3 " + styles.head}
              to={`/info/${props.data.id}`}
            >
              {props.data.title}
            </Link>
            <p>
              <span className="fw-bold">Ngày phát hành:</span>{" "}
              <span className="text-secondary">{props.data.release_date}</span>
            </p>
            <p>
              <span className="fw-bold">Số lượt xem:</span>{" "}
              <span className="text-secondary">{props.data.popularity}</span>
            </p>
            <p>
              <span className="fw-bold">Điểm IMDb:</span>
              <span className={styles.point + " fw-bold ms-2"}>
                {props.data.vote_average}
              </span>
            </p>
            <hr />
            <p>
              <span className="fw-bold">Nội dung phim:</span>{" "}
              <span className="text-secondary">{props.data.overview}</span>
            </p>

            <Button
              variant="danger"
              style={{ borderRadius: "0" }}
              onClick={handleClick}
            >
              Xem phim
            </Button>
          </div>
        </>
      ) : (
        <div onClick={handleClick}>
          <img
            src={headLink + props.data.backdrop_path}
            className={styles.img}
            alt="movie"
          />
          <FontAwesomeIcon icon={faPlay} className={styles.icon} size="2xl" />
          <p className={styles.title}>{props.data.title}</p>
        </div>
      )}
    </div>
  );
}

export default Movie;
