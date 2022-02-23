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
import { searchCircleOutline } from "ionicons/icons";

import ElementCard from "../components/ElementCard";
import { getBrandsByName } from "../selectors/getBrandsByName";
import brands from "../data/brands";

import "./Home.css";
import "../theme/styles.css";

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [brandsArr, setBrandsArr] = useState(brands);

    useEffect(() => {
        if (searchValue === "") {
            setBrandsArr(brands);
        } else {
            setBrandsArr(getBrandsByName(searchValue));
        }
    }, [searchValue]);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="fontSize-25">Home</IonTitle>
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
                <IonGrid>
                    {brandsArr.length > 0 ? (
                        brandsArr.map((brand) => (
                            <IonRow key={brand.id}>
                                <IonCol>
                                    <ElementCard
                                        name={brand.name}
                                        founder={brand.founder}
                                        imgPath={brand.imgPath}
                                        description={brand.description}
                                        instagram={brand.instagram}
                                        facebook={brand.facebook}
                                    />
                                </IonCol>
                            </IonRow>
                        ))
                    ) : (
                        <div className="IonNote-wrapper">
                            <IonNote>
                                No Results{" "}
                                <IonIcon icon={searchCircleOutline} />
                            </IonNote>
                        </div>
                    )}
                </IonGrid>
                {/* <CardsGrid cards={brands}/> */}
            </IonContent>
        </IonPage>
    );
};

export default Home;
