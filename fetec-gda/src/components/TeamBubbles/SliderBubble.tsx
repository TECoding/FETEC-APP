import React from "react";
import "./TeamBubbles.css";
import BubbleItem from "./BubbleItem";
import ScrollContainer from "react-indiana-drag-scroll";
import brands from "../../data/brands";

interface Itemprops {
    brand: string;
}

const SliderBubble: React.FC<Itemprops> = ({ brand }) => {
    const team = brands.filter((brandAux) => brandAux.name === brand)[0].team;

    return (
        <div className="box" style={{ width: "100%", height: "250px" }}>
            <ScrollContainer
                className="scroll-container"
                vertical={true}
                horizontal={true}
            >
                {team.map(({ name, img, role }) => (
                    <BubbleItem
                        key={name}
                        img_url={img}
                        name={name}
                        role={role}
                    />
                ))}
            </ScrollContainer>
        </div>
    );
};

export default SliderBubble;
