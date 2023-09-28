
import "./Main.css";
import Header from "./Header/Header";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import styled from "styled-components";

function Main({data}) {
    const Main = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color:white;
    min-height: 100vh;
    width: 90%;
    margin-top:1rem;
    border-radius: 15px;
    background-color:rgb(20,20,20,0.9);
    `
    return (
        <Main>
            <Header />
            <Content data={data}></Content>
            <Footer data={data} />
        </Main>
    );

}
export default Main