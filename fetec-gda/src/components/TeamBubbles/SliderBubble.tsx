import React from "react";
import './TeamBubbles.css';
import Teams from "../../data/Teams";
import BubbleItem from "./BubbleItem";
import ScrollContainer from 'react-indiana-drag-scroll'

interface Itemprops {
    brand: string
}

const SliderBubble: React.FC<Itemprops> = (props) =>{
    return(
        <div className = 'box' style = {{width : '100%',height : '250px'}}> 
            <ScrollContainer className="scroll-container" vertical = {true} horizontal = {true} >
            {Teams.map((member) => (
                (member.brand == props.brand ? 
                        <BubbleItem 
                            key={member.key} 
                            img_url = {member.img} 
                            name = {member.name} 
                            role = {member.role}/>
                    : null)
                ))}        
            </ScrollContainer>
        </div>
    )
}

export default SliderBubble;