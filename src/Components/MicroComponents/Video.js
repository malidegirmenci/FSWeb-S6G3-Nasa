import "./Video.css";
function Video({video}){
    console.log(video);
    return(
        <div class="embed-responsive embed-responsive-4by3">
            <iframe class="embed-responsive-item" width="720px" height="480px" src="https://www.youtube.com/embed/s6IpsM_HNcU?rel=1?autoplay=1&controls=0&loop=1"></iframe>
        </div>
    )
}
export default Video