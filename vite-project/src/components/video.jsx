import video from "../assets/welcome.mp4"


const VideoComp = () => {
    return(
        <video className="videos" src={video} autoPlay loop muted />
    )
}


export default VideoComp;