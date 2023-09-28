import "./ImgContainer.css";
import styled from "styled-components"
import Img from "../MicroComponents/Img"
import { Spinner } from "reactstrap";
function ImgContainer(props){
    
    if(!props.img)return<Spinner color="light" size="5rem">Loading...</Spinner>
    const {img, copyright} = props;

    const Copyright = styled.p`
        display:inline;
        font-size: 0.8rem;
        text-align: center;
        margin-left:20rem;
        margin-bottom:0.3rem;
    `;
    return(
        <div className="ImgContainer">
                <Img img={img}/>
                <Copyright>Image Credit & Copyright: <b>{copyright}</b></Copyright>
        </div>
    )
}
export default ImgContainer;