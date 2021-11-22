import React from 'react';
import { IonSearchbar } from "@ionic/react";

export const SearchBar: React.FC = () => {
    return (
        <IonSearchbar placeholder={''} onIonChange={e => console.log(e.detail.value!)} ></IonSearchbar>
    );
}