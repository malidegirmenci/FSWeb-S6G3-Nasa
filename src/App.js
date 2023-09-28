import styled from "styled-components";
import Main from "./Components/Main"
import React, { useEffect, useState } from "react";
import axios from "axios";
const API_KEY = "vg6bcwJ32djbyjR6jjISQQ7wOesJakZ97Etn95oX";
//&date=2022-01-25
function App() {
 
  const [data, setData] = useState({})
    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`)
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error.log);
            })
    }, [])
    const App = styled.div`
    display:flex;
    background-image:url(${data.url});
    background-repeat: no-repeat;
    background-size: cover;
    justify-content:center;
  `
  return (
    <App>
      <Main data={data}></Main>
    </App>
  );
}

export default App;
