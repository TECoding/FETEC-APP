import {
    IonGrid,
    IonRow,
    IonCol
  } from "@ionic/react";

import ElementCard from "./ElementCard";

interface GridProps {
    cards: { 
        id: number; 
        name: string; 
        founder: string; 
        description: string; 
        imgPath: string; 
        favorite: boolean; 
    }[]    
}

const CardsGrid: React.FC<GridProps> = ({cards}) => {

    return (
        <IonGrid>
          {cards.map((card) => (
            <IonRow key={card.id}>
              <IonCol size="6">
                <ElementCard
                  name={card.name}
                  founder={card.founder}
                  imgPath={card.imgPath}
                />
              </IonCol>
              <IonCol size="6">
                <ElementCard
                  name={card.name}
                  founder={card.founder}
                  imgPath={card.imgPath}
                />
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>
    )
};

export default CardsGrid;