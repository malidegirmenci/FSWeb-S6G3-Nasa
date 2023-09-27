import ImgContainer from "../Containers/ImgContainer";
import TextContainer from "../Containers/TextContainer";
import "./Content.css";

function Content (props){
    const { nasaAPOD } = props;

    console.log("Content:", nasaAPOD);
    return (
        <div className="Content">
            <ImgContainer img={nasaAPOD.hdurl}/>
            <TextContainer data = {nasaAPOD}/>
        </div>
    )
}
export default Content;