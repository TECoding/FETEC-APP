import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonNote,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { planetOutline } from "ionicons/icons";
import ElementCard from "../components/ElementCard";
import brands from "../data/brands";
import "./Favorite.css";

const Favorite: React.FC = () => {
    const favorites = brands.filter((brand) => brand.favorite === true);
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Favorite</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Favorite</IonTitle>
                    </IonToolbar>
                </IonHeader>
                {favorites.length !== 0 ? (
                    <IonGrid>
                        <IonRow>
                            {favorites.map((brand) => (
                                <IonCol
                                    key={brand.id}
                                    className="ion-no-padding"
                                >
                                    <ElementCard
                                        name={brand.name}
                                        founder={brand.founder}
                                        imgPath={brand.imgPath}
                                        description={brand.description}
                                        instagram={brand.instagram}
                                        facebook={brand.facebook}
                                    />
                                </IonCol>
                            ))}
                        </IonRow>
                    </IonGrid>
                ) : (
                    <div className="IonNote-wrapper">
                        <IonNote>
                            You haven´t added anything yet{" "}
                            <IonIcon icon={planetOutline} />
                        </IonNote>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Favorite;
