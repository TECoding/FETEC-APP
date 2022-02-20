import { IonButton, IonIcon, IonContent } from "@ionic/react";

interface GButtonProps {
    icon: string;
}

const GenericButton: React.FC<{ props: GButtonProps }> = ({ props }) => {
    return (
        <IonContent>
            <IonButton>
                <IonIcon slot="icon-only" icon={props.icon} />
            </IonButton>
        </IonContent>
    );
};

export default GenericButton;
