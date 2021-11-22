import {
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ElementCard from "../components/ElementCard";
import CardsGrid from "../components/CardsGrid";
import "./Home.css";
import brands from "../data/brands";

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <CardsGrid cards={brands}/>

      </IonContent>
    </IonPage>
  );
};

export default Home;


/*<IonGrid>
          {brands.map((brand) => (
            <IonRow key={brand.id}>
              <IonCol>
                <ElementCard
                  name={brand.name}
                  founder={brand.founder}
                  imgPath={brand.imgPath}
                  description={brand.description}
                />
              </IonCol>
            </IonRow>
          ))}
        </IonGrid>*/