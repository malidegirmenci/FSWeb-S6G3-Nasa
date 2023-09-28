import styled from "styled-components"
import "./TextContainer.css";
import { Spinner } from "reactstrap";
function TextContainer({ data }) {
    const Explanation = styled.p`
        margin-top:1rem;
        text-align:justify;
    `;
    const Title = styled.h2`
        margin: 0;
        text-align: center;
    `
    const Date = styled.p`
        margin:0;
        margin-bottom: 1rem;
        text-align:center;
    `
    return (
        <div className="TextContainer">
            <Title>{data.title}</Title>
            <Date> {data.date} </Date>
            <Explanation> {data.explanation} </Explanation>
        </div>
    )
}
export default TextContainer