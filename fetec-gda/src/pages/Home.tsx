import { useEffect, useState } from "react";
import {
    IonButton,
    IonCol,
    IonContent,
    IonGrid,
    IonHeader,
    IonIcon,
    IonNote,
    IonPage,
    IonPopover,
    IonRow,
    IonSearchbar,
    IonTitle,
    IonToolbar,
} from "@ionic/react";
import { filterOutline, searchCircleOutline } from "ionicons/icons";

import ElementCard from "../components/ElementCard";
import FilterPopOver from "../components/FilterPopOver/FilterPopOver";
import { getBrandsByName } from "../selectors/getBrandsByName";
import { getBrandsByCategories } from "../selectors/getBrandsByCategories";
import { useIsMount } from "../hooks/useIsMount";

import brands from "../data/brands";
import categories from "../data/categories";

import "./Home.css";
import "../theme/styles.css";

const Home: React.FC = () => {
    const [searchValue, setSearchValue] = useState("");
    const [brandsArr, setBrandsArr] = useState([...brands]);

    const [popoverState, setShowPopover] = useState({
        showPopover: false,
        event: undefined,
    });

    const [checkboxList, setCheckboxList] = useState([...categories]);

    const isMount = useIsMount();

    useEffect(() => {
        if (!isMount) {
            if (searchValue === "") {
                setBrandsArr([...brands]);
            } else {
                setBrandsArr(getBrandsByName(searchValue));
            }
        }
    }, [searchValue]);

    useEffect(() => {
        if (!isMount) {
            setBrandsArr(getBrandsByCategories(checkboxList));
        }
    }, [checkboxList]);

    const handleFilterClicked = (e: any) => {
        setShowPopover({ showPopover: !popoverState.showPopover, event: e });
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle className="fontSize-25">Home</IonTitle>
                </IonToolbar>
                <IonToolbar className="p-5">
                    <IonSearchbar
                        slot="start"
                        className="rounded-20"
                        type="text"
                        color="light"
                        placeholder={"Search"}
                        onIonChange={(e) => setSearchValue(e.detail.value!)}
                    />
                    <IonButton
                        slot="end"
                        color="light"
                        size="small"
                        onClick={handleFilterClicked}
                    >
                        <IonIcon icon={filterOutline} />
                    </IonButton>
                </IonToolbar>
                <IonPopover
                    children={
                        <FilterPopOver
                            categories={checkboxList}
                            setCheckBoxList={setCheckboxList}
                        />
                    }
                    event={popoverState.event}
                    isOpen={popoverState.showPopover}
                    onDidDismiss={handleFilterClicked}
                    showBackdrop={false}
                ></IonPopover>
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
            </IonContent>
        </IonPage>
    );
};

export default Home;
