import React from "react";
import { IonSearchbar } from "@ionic/react";

interface ContainerProps {
    setSearchValue: Function;
}

export const SearchBar: React.FC<ContainerProps> = ({ setSearchValue }) => {
    return (
        <IonSearchbar
            placeholder={"Search"}
            onIonChange={(e) => setSearchValue(e.detail.value!)}
        ></IonSearchbar>
    );
};
