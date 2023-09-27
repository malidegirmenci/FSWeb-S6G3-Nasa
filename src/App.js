import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

function App() {
  const [nasaAPOD, setNasaAPOD] = useState({})
  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=vg6bcwJ32djbyjR6jjISQQ7wOesJakZ97Etn95oX")
      .then((res) => {
        setNasaAPOD(res.data);
      })
      .catch((error) => {
        console.log(error.log);
      })
  }, [])
  console.log(nasaAPOD);
  return (
    <div className="App">
      <Header />
      <Content nasaAPOD={nasaAPOD} />
      <Footer nasaAPOD={nasaAPOD} />
    </div>
  );
}

export default App;
