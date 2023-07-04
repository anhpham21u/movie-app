import MyNav from "./../component/Navbar.jsx";
import Movie from "./../component/Movie.jsx";
import PosterMovie from "../component/PosterMovie.jsx";
import styles from "./home.module.scss";
import Footer from "../component/Footer.jsx";
import { ApiContext } from "./../App.js";
import { useContext } from "react";

function Home() {
  const {
    isTakeNow,
    isTakePopular,
    isTakeRate,
    isTakeComing,
    dataNow,
    dataPopular,
    dataRate,
    dataComing,
  } = useContext(ApiContext);

  return (
    <div className="bg-dark text-light">
      <MyNav />

      <div className="px-5 mt-5 pb-5">
        <h4 className="myText-yellow mb-3">PHIM ĐỀ CỬ</h4>
        <div className={"mb-5 " + styles.listMovie}>
          {isTakeNow &&
            dataNow.results.map((val, idx) => (
              <PosterMovie data={val} key={idx} />
            ))}
        </div>

        <h4 className="myText-yellow mb-3">PHIM PHỔ BIẾN</h4>
        <div className={"mb-5"}>
          {isTakePopular &&
            dataPopular.results.map((val, idx) => (
              <Movie data={val} key={idx} first={idx === 0 ? true : false} />
            ))}
        </div>

        <h4 className="myText-yellow mb-3">PHIM THEO ĐÁNH GIÁ</h4>
        <div className={"mb-5"}>
          {isTakeRate &&
            dataRate.results.map((val, idx) => (
              <Movie data={val} key={idx} first={idx === 0 ? true : false} />
            ))}
        </div>

        <h4 className="myText-yellow mb-3">PHIM SẮP CHIẾU</h4>
        <div className={"mb-5"}>
          {isTakeComing &&
            dataComing.results.map((val, idx) => (
              <Movie data={val} key={idx} first={false} />
            ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
