import React from "react";
import './YoutubeComponent.css';

const YoutubeComponent = (props) =>{
    return (
        <div className="yt-wrapper">
            <div className="image-thumb">
                <img src="profile.jpg" alt=""/>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComponent.defaultProps = {
    title:'Title Here',
    desc:"0x Ditonton"
}

export default YoutubeComponent;