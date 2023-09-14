import MyNav from "./../component/Navbar.jsx";
import Movie from "./../component/Movie.jsx";
import PosterMovie from "../component/PosterMovie.jsx";
import styles from "./home.module.scss";
import Footer from "../component/Footer.jsx";
import bg1Img from "./../assets/img/bg-1.jpg";
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
    <div>
      <MyNav />

      <div className="bg-myDark text-light">
        <div className="position-relative">
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg1Img})`,
            }}
            className={styles.background}
          ></div>

          <div className="p-5">
            <h4 className="myText-yellow mb-3">PHIM ĐỀ CỬ</h4>
            <div className={"mb-5 " + styles.listMovie}>
              {isTakeNow &&
                dataNow.results.map((val, idx) => (
                  <PosterMovie data={val} key={idx} />
                ))}
            </div>
          </div>
        </div>

        <div className="p-5">
          <h4 className="myText-yellow mb-3">PHIM PHỔ BIẾN</h4>
          <div className={"mb-5"}>
              {isTakePopular &&
                <>
                  <Movie data={dataPopular.results[0]} first={true} />
                  <div className="row"> 
                    {dataPopular.results.filter((val, idx) => idx !== 0).map((val, idx) => (
                      <div className="col-xl-3 col-md-4 col-sm-6" key={idx}>
                        <Movie data={val} first={false} />
                      </div>
                    ))}
                  </div>
                </>
              }
          </div>

          <h4 className="myText-yellow mb-3">PHIM THEO ĐÁNH GIÁ</h4>
          <div className={"mb-5"}>
              {isTakeRate &&
                <>
                  <Movie data={dataRate.results[0]} first={true} />
                  <div className="row">
                    {dataRate.results.filter((val, idx) => idx !== 0).map((val, idx) => (
                      <div className="col-xl-3 col-md-4 col-sm-6" key={idx}>
                        <Movie data={val} first={false} />
                      </div>
                    ))}
                  </div>
                </>
              }
          </div>

          <h4 className="myText-yellow mb-3">PHIM SẮP CHIẾU</h4>
          <div className={"mb-5"}>
            {isTakeComing &&
              <div className="row">
                {dataComing.results.map((val, idx) => (
                  <div className="col-xl-3 col-md-4 col-sm-6" key={idx}>
                    <Movie data={val} key={idx} first={false} />
                  </div>
                ))}
              </div>
            }
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
