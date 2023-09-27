import "./ImgContainer.css";
import Img from "../MicroComponents/Img"
function ImgContainer(props){
    const {img} = props;
    return(
        <div className="ImgContainer">
                <Img img={img}/>
        </div>
    )
}
export default ImgContainer;