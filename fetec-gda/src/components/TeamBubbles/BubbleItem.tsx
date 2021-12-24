import React from 'react';
import './TeamBubbles.css';

interface Itemprops {
    img_url: string;
    name: string;
    role: string;
}

const BubbleItem: React.FC<Itemprops> = (props) => {
    return(
        <div className = "member-card">
            <img
                src = {props.img_url}
                alt = " "
                style = {{width : '100px',height : '100px',objectFit :'cover'}}
                className = "member"
            />
            <h2>{props.name}</h2>
            <h6>{props.role}</h6>
        </div>
    )
}

export default BubbleItem;
