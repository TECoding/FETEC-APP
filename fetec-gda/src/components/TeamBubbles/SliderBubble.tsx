import React from "react";
import './TeamBubbles.css';
import Teams from "../../data/Teams";
import BubbleItem from "./BubbleItem";
import HorizontalScroll from 'react-scroll-horizontal';

interface Itemprops {
    brand: string
}

const SliderBubble: React.FC<Itemprops> = (props) =>{
    return(
        <div  style = {{width : '100%',height : '250px',overflow: 'hidden'}}        > 
            <HorizontalScroll >
            {Teams.map((member) => (
                (member.brand == props.brand ? 
                        <BubbleItem 
                            key={member.key} 
                            img_url = {member.img} 
                            name = {member.name} 
                            role = {member.role}/>
                    : null)
                ))}
            </HorizontalScroll>
            
        </div>
    )
}

export default SliderBubble;