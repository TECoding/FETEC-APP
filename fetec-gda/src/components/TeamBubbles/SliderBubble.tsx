import React from "react";
import './TeamBubbles.css';
import Teams from "../../data/Teams";
import BubbleItem from "./BubbleItem";

interface Itemprops {
    brand: string
}

const SliderBubble: React.FC<Itemprops> = (props) =>{
    return(
        <div>
            {Teams.map((member) => (
                (member.brand == props.brand ? 
                    <BubbleItem 
                        key={member.key} 
                        img_url = {member.img} 
                        name = {member.name} 
                        role = {member.role}/>
                
                    : null)
            ))}
        </div>
    )
}

export default SliderBubble;