import MyNav from "../component/Navbar";
import Movie from "./../component/Movie";
import Footer from "./../component/Footer";
import { useContext } from "react";
import { ApiContext } from "../App";

function Upcoming() {
  const { isTakeComing, dataComing } = useContext(ApiContext);

  return (
    <div className="bg-myDark text-light">
      <MyNav />

      <div className="px-5 mt-5">
        <h4 className="myText-yellow mb-5">PHIM SẮP CHIẾU</h4>
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

export default Upcoming;
