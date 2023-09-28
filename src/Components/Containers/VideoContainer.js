import "./VideoContainer.css";
import Video from "../MicroComponents/Video"
import { Spinner } from "reactstrap";
function VideoContainer(props){
    if(!props.video)return<Spinner color="light" size="5rem">Loading...</Spinner>
    const {video} = props;
    return(
        <div className="VideoContainer">
                <Video video={video}/>
        </div>
    )
}
export default VideoContainer;