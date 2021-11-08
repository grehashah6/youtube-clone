import React from "react";
import './VideoGridHeader.css'


export const VideoGridHeader = (props) => {
    console.log(props)
    return <div className="video_grid_header">
        <span className="video_title">{props.title}</span>
    </div>
}