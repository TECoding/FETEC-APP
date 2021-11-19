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
}

const ElementCard: React.FC<ContainerProps> = (props) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <IonModal isOpen={showModal} swipeToClose={true}>
        <DetailsModal
          brandName={props.name}
          brandFounder={props.founder}
          brandImgPath={props.imgPath}
          brandDescription={props.description}
          clickHandler={() => setShowModal(false)}
        />
      </IonModal>
      <IonCard color="tertiary" button onClick={() => setShowModal(true)}>
        <img src={props.imgPath} alt={props.name} />
        <IonCardHeader>
          <IonCardTitle>{props.name}</IonCardTitle>
          <IonCardSubtitle>{props.founder}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>
    </>
  );
};

export default ElementCard;
