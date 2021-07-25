import React from 'react'
import './NewsDiv.css'

function NewsDiv(props) {
    return (
        <div className = "news_container_child">    
            <div className = "article_title"><a href = {props.url} target = "_blank" rel="noreferrer">{props.title}</a></div>
            <br/>
            <div className = "points"><span>Points:</span> {props.points}</div> <br/>
            <div className = "comments">
                { }
            </div>
        </div>
    )
}

export default NewsDiv
