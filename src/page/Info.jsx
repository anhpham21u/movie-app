import MyNav from "../component/Navbar";
import Footer from "../component/Footer";
import styles from "./info.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Info() {
  const { id } = useParams();
  const [dataMovie, setDataMovie] = useState();
  const [dataVideo, setDataVideo] = useState();
  const [isTakeData, setIsTakeData] = useState(false);
  const [isTakeVideo, setIsTakeVideo] = useState(false);

  const headLink = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataMovie(data);
        setIsTakeData(true);
      });

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataVideo(data);
        setIsTakeVideo(true);
      });
  }, []);

  let trailerVideo = "";
  let haveTrailer = false;

  if (isTakeVideo === true) {
    for (let i = dataVideo.results.length - 1; i >= 0; i--) {
      if (
        dataVideo.results[i].type === "Trailer" ||
        dataVideo.results[i].type === "Teaser"
      ) {
        trailerVideo = dataVideo.results[i];
        haveTrailer = true;
        break;
      }
    }
  }

  return (
    <div>
      <MyNav />

      {isTakeData && (
        <div className="text-light" style={{ backgroundColor: "#1a1a1a" }}>
          <div className="p-5">
            <div
              className={styles.back + " d-flex justify-content-center mx-auto"}
            >
              <img
                src={headLink + dataMovie.backdrop_path}
                alt="movie"
                className={styles.backdrop + " rounded-3"}
              />
              <FontAwesomeIcon
                icon={faPlay}
                className={styles.icon}
                size="2xl"
              />

              <div className={"d-flex gap-4 align-items-end " + styles.front}>
                <img
                  src={headLink + dataMovie.poster_path}
                  alt="movie"
                  className={styles.poster}
                />
                <div>
                  <p
                    className={"fs-4 text-uppercase mb-1 " + styles.tagline}
                    style={{ fontWeight: "500" }}
                  >
                    {dataMovie.tagline}
                  </p>
                  <p className="fs-5" style={{ fontWeight: "500" }}>
                    {dataMovie.title} (
                    {new Date(dataMovie.release_date).getFullYear()})
                  </p>
                  {isTakeVideo === true && trailerVideo !== "" ? (
                    <Button variant="info" style={{ borderRadius: "0" }}>
                      <a
                        href={`https://www.youtube.com/watch?v=${trailerVideo.key}`}
                        target="_blank"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Trailer
                      </a>
                    </Button>
                  ) : (
                    <Button variant="info" style={{ borderRadius: "0" }}>
                      Trailer
                    </Button>
                  )}

                  <Button
                    variant="danger"
                    style={{ borderRadius: "0" }}
                    className="mx-2"
                  >
                    Xem phim
                  </Button>
                </div>
              </div>
            </div>

            <div
              className={
                styles.back +
                " d-flex justify-content-center mx-auto mt-4 p-4 rounded-3"
              }
              style={{ backgroundColor: "#252525" }}
            >
              <div>
                <p>
                  <span className="fw-bold">Ngày phát hành:</span>{" "}
                  <span className="text-secondary">
                    {dataMovie.release_date}
                  </span>
                </p>
                <p>
                  <span className="fw-bold">Số lượt xem:</span>{" "}
                  <span className="text-secondary">{dataMovie.popularity}</span>
                </p>
                <p>
                  <span className="fw-bold">Điểm IMDb:</span>
                  <span className={styles.point + " fw-bold ms-2"}>
                    {dataMovie.vote_average}
                  </span>
                </p>
                <hr />
                <p>
                  <span className="fw-bold">Nội dung phim:</span>{" "}
                  <span className="text-secondary">{dataMovie.overview}</span>
                </p>

                <hr />
                <p>
                  <span className="fw-bold">Trailer:</span>
                </p>
                {isTakeVideo && haveTrailer ? (
                  <iframe
                    width="100%"
                    height="550"
                    src={`https://www.youtube.com/embed/${trailerVideo.key}`}
                    frameborder="0"
                    allowFullScreen
                    allow="fullscreen"
                    className={styles.iframe}
                  ></iframe>
                ) : (
                  <p className="text-secondary">Phim không có trailer</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Info;
