import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonModal,
} from "@ionic/react";
import React, { useState } from "react";
import DetailsModal from "./DetailsModal";

interface ContainerProps {
    name: string;
    founder: string;
    imgPath: string;
    description: string;
    instagram: string;
    facebook: string;
}

const ElementCard: React.FC<ContainerProps> = ({
    name,
    founder,
    imgPath,
    description,
    instagram,
    facebook,
}) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <IonModal isOpen={showModal} swipeToClose={true}>
                <DetailsModal
                    name={name}
                    founder={founder}
                    imgPath={imgPath}
                    description={description}
                    instagram={instagram}
                    facebook={facebook}
                    clickHandler={() => setShowModal(false)}
                />
            </IonModal>
            <IonCard color="tertiary" button onClick={() => setShowModal(true)}>
                <img src={imgPath} alt={name} />
                <IonCardHeader>
                    <IonCardTitle>{name}</IonCardTitle>
                    <IonCardSubtitle>{founder}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </>
    );
};

export default ElementCard;
