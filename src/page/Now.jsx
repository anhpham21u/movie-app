import MyNav from "../component/Navbar";
import Movie from "./../component/Movie";
import Footer from "./../component/Footer";
import { useContext } from "react";
import { ApiContext } from "../App";

function Now() {
  const { isTakeNow, dataNow } = useContext(ApiContext);

  return (
    <div className="bg-myDark text-light">
      <MyNav />

      <div className="px-5 mt-5">
        <h4 className="myText-yellow mb-5">PHIM ĐỀ CỬ</h4>
        <div className={"mb-5"}>
          {isTakeNow &&
            <div className="row">
              {dataNow.results.map((val, idx) => (
                <div className="col-xl-3 col-md-4 col-sm-6">
                  <Movie data={val} key={idx} first={false} />
                </div>
              ))}
            </div>
          }
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Now;
