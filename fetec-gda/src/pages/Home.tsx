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
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { searchCircleOutline } from "ionicons/icons";

import ElementCard from "../components/ElementCard";
import { SearchBar } from "../components/SearchBar/SearchBar";
import brands from "../data/brands";
import { getBrandsByName } from "../selectors/getBrandsByName";
import "./Home.css";

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
                    <IonTitle>Home</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <SearchBar setSearchValue={setSearchValue} />
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
