import MyNav from "../component/Navbar";
import Footer from "../component/Footer";
import Movie from "../component/Movie";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const [dataSearch, setDataSearch] = useState();
  const [isTakeApi, setIsTakeApi] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const queryValue = searchParams.get("q");

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setDataSearch(data.results);
        setIsTakeApi(true);
      });
  }, [queryValue]);

  return (
    <>
      <MyNav img={"img/logo.png"} />

      {isTakeApi && (
        <div style={{ backgroundColor: "#1a1a1a" }}>
          <div className="p-5 text-light">
            <h4 className="myText-yellow mb-5">
              Kết quả tìm kiếm cho: {queryValue}
            </h4>
            <div className={"mb-5"}>
              {dataSearch.map((val, idx) => (
                <Movie data={val} key={idx} first={false} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer img={"img/logo.png"} />
    </>
  );
}

export default Search;
