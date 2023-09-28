import ImgContainer from "../Containers/ImgContainer";
import VideoContainer from "../Containers/VideoContainer";
import TextContainer from "../Containers/TextContainer";

import "./Content.css";

function Content (props){
    const {data} = props;
    console.log("Content:", data);
    return (
        <div className="Content">
            { data.media_type === "image" ? <ImgContainer img={data.hdurl} copyright={data.copyright}/> : <VideoContainer video={data.url}/>}
            <TextContainer data = {data}/>
        </div>
    )
}
export default Content;