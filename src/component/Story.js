import React from 'react'
import {Avatar} from "@material-ui/core"
import './Story.css'

function Story({ image,profileSrc,title }) {
    return (
        <div className="story" style={{backgroundImage: `url(${image})` ,backgroundPosition:`center`}}>
            <Avatar className="story__avatar" src={profileSrc}/>
            <h4>{title}</h4>
        </div>
    )
}

export default Story
