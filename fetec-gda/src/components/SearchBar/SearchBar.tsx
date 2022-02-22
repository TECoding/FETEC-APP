import React from "react";
import { IonSearchbar } from "@ionic/react";

interface ContainerProps {
    setSearchValue: Function;
}

export const SearchBar: React.FC<ContainerProps> = (props) => {
    return (
        <IonSearchbar
            placeholder={"Search"}
            onIonChange={(e) => props.setSearchValue(e.detail.value!)}
        ></IonSearchbar>
    );
};
