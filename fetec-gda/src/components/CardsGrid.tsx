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
            <IonRow>
              {cards.map((card) => (
                  <IonCol size="6"  key={card.id}>
                    <ElementCard
                      name={card.name}
                      founder={card.founder}
                      imgPath={card.imgPath}
                    />
                  </IonCol>
              ))}
            </IonRow>
        </IonGrid>
    )
};

export default CardsGrid;