import "./App.css";

import Home from "./page/Home.jsx";
import Login from "./page/Login.jsx";
import Now from "./page/Now";
import Popular from "./page/Popular";
import Rate from "./page/Rate";
import Upcoming from "./page/Upcoming";
import Info from "./page/Info.jsx";
import Search from "./page/Search";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./scss/styles.scss";

export const ApiContext = createContext();

function App() {
  const [isTakeNow, setIsTakeNow] = useState(false);
  const [isTakePopular, setIsTakePopular] = useState(false);
  const [isTakeRate, setIsTakeRate] = useState(false);
  const [isTakeComing, setIsTakeComing] = useState(false);
  const [dataNow, setDataNow] = useState();
  const [dataPopular, setDataPopular] = useState();
  const [dataRate, setDataRate] = useState();
  const [dataComing, setDataComing] = useState();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
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
        setDataNow(data);
        setIsTakeNow(true);
      });

    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataPopular(data);
        setIsTakePopular(true);
      });

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
        setDataRate(data);
        setIsTakeRate(true);
      });

    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGQ5MTYyYzRjYjAyNDQyMGQ3Y2FmNDAzYTA5MDYyYyIsInN1YiI6IjY0OWUyODNiODI4OWEwMDExY2MxODhmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f_QW-3tObsnDfPdxDErlnSxd-5hG5k06J5N2l9dSqok",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDataComing(data);
        setIsTakeComing(true);
      });
  }, []);

  return (
    <ApiContext.Provider
      value={{
        isTakeNow,
        isTakePopular,
        isTakeRate,
        isTakeComing,
        dataNow,
        dataPopular,
        dataRate,
        dataComing,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/now" element={<Now />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/rate" element={<Rate />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/info/:id" element={<Info />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </ApiContext.Provider>
  );
}

export default App;
