import React from "react";
import "./TeamBubbles.css";

interface Itemprops {
    img_url: string;
    name: string;
    role: string;
}

const BubbleItem: React.FC<Itemprops> = ({ img_url, name, role }) => {
    return (
        <div className="member-card">
            <img
                src={img_url}
                alt=" "
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                className="member"
            />
            <h2>{name}</h2>
            <h6>{role}</h6>
        </div>
    );
};

export default BubbleItem;
