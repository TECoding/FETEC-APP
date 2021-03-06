import { useEffect, useState } from "react";
import {
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonNote,
    IonPage,
    IonRow,
    IonSearchbar,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { planetOutline, searchCircleOutline } from "ionicons/icons";

import ElementCard from "../components/ElementCard";
import { getBrandsByName } from "../selectors/getBrandsByName";
import brands from "../data/brands";

import "./Favorite.css";
import "../theme/styles.css";

const Favorite: React.FC = () => {
    const favorites = brands.filter((brand) => brand.favorite === true);

    const [searchValue, setSearchValue] = useState("");
    const [favsArr, setFavsArr] = useState(favorites);

    useEffect(() => {
        if (searchValue === "") {
            setFavsArr(favorites);
        } else {
            setFavsArr(getBrandsByName(searchValue, favorites));
        }
    }, [searchValue]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="fontSize-25">Favorite</IonTitle>
                </IonToolbar>
                <IonToolbar>
                    <IonSearchbar
                        className="rounded-20"
                        type="text"
                        color="light"
                        placeholder={"Search"}
                        onIonChange={(e) => setSearchValue(e.detail.value!)}
                    />
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                {favsArr.length > 0 ? (
                    <IonGrid>
                        <IonRow>
                            {favsArr.map((brand) => (
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
                ) : searchValue.length === 0 ? (
                    <div className="IonNote-wrapper">
                        <IonNote>
                            You haven't added anything yet{" "}
                            <IonIcon icon={planetOutline} />
                        </IonNote>
                    </div>
                ) : (
                    <div className="IonNote-wrapper--NoResults">
                        <IonNote>
                            No Results <IonIcon icon={searchCircleOutline} />
                        </IonNote>
                    </div>
                )}
            </IonContent>
        </IonPage>
    );
};

export default Favorite;
