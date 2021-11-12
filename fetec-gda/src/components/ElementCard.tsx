import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from "@ionic/react";

interface ContainerProps {
  name: string;
  founder: string;
  imgPath: string;
}

const ElementCard: React.FC<ContainerProps> = ({ name, founder, imgPath }) => {
  return (
    <IonCard color="tertiary" button>
      <img src={imgPath} alt={name} />
      <IonCardHeader>
        <IonCardTitle>{name}</IonCardTitle>
        <IonCardSubtitle>{founder}</IonCardSubtitle>
      </IonCardHeader>
    </IonCard>
  );
};

export default ElementCard;
