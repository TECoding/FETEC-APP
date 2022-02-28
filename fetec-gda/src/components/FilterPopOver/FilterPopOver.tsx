import {
    IonCheckbox,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
} from "@ionic/react";
import { Dispatch, SetStateAction } from "react";

interface ContainerProps {
    categories: { val: string; isChecked: boolean }[];
    setCheckBoxList: Dispatch<
        SetStateAction<{ val: string; isChecked: boolean }[]>
    >;
}

const FilterPopOver: React.FC<ContainerProps> = ({
    categories,
    setCheckBoxList,
}) => {
    const handleCheckboxChange = (cat: any) => {
        setCheckBoxList(
            categories.map((c) =>
                c.val === cat ? { val: c.val, isChecked: !c.isChecked } : c
            )
        );
    };
    return (
        <IonContent>
            <IonList>
                {categories.map((category) => (
                    <IonItem key={category.val}>
                        <IonLabel>{category.val}</IonLabel>
                        <IonCheckbox
                            color="primary"
                            checked={category.isChecked}
                            slot="start"
                            onIonChange={() => {
                                handleCheckboxChange(category.val);
                            }}
                        ></IonCheckbox>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    );
};

export default FilterPopOver;
