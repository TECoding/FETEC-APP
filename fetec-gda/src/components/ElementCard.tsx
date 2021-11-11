import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';

const ElementCard: React.FC = () => {
  return (
    <IonCard color="tertiary" button>
        <IonImg src="/assets/images/example-1.jpg"></IonImg>
        <IonCardHeader>
            <IonCardTitle>Brand Name</IonCardTitle>
            <IonCardSubtitle>Nombre de Fundador(a)</IonCardSubtitle>
        </IonCardHeader>
    </IonCard>
  );
};

export default ElementCard;