import { IonButton, IonIcon, IonContent } from '@ionic/react';
import {star} from 'ionicons/icons'
import { start } from 'repl';


interface GButtonProps {
    icon: string
}

const GenericButton: React.FC<{props: GButtonProps}> = ({props}) => {

    return (
        <IonContent>
            <IonButton>
                <IonIcon slot='icon-only' icon={props.icon} />
            </IonButton>
        </IonContent>
    )
};

export default GenericButton