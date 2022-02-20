import { IonButton, IonContent, IonIcon, IonText } from "@ionic/react";
import {
  arrowBackOutline,
  heartOutline,
  logoFacebook,
  logoInstagram,
  shareOutline,
} from "ionicons/icons";
import "./DetailsModal.css";
import SliderBubble from "./TeamBubbles/SliderBubble";

interface ModalProps {
  name: string;
  founder: string;
  imgPath: string;
  description: string;
  instagram: string;
  facebook: string;
  clickHandler: () => void;
}

const DetailsModal: React.FC<ModalProps> = ({
  name,
  founder,
  imgPath,
  description,
  instagram,
  facebook,
  clickHandler,
}) => {
  return (
    <IonContent>
      <div className="details-container">
        {/* Image Section with buttons */}
        <img src={imgPath} />
        <div className="btn back">
          <IonButton onClick={clickHandler} color="light">
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </div>
        <div className="btn favorite">
          <IonButton color="light">
            <IonIcon icon={heartOutline} />
          </IonButton>
        </div>
        {/* Brand details section */}
        <div className="ion-text-left ion-margin-start ion-margin-end">
          <div className="name-shareBtn-section">
            <IonText>
              <h1 className="ion-no-margin ion-margin-top">{name}</h1>
            </IonText>
            <IonButton fill="clear">
              <IonIcon
                icon={shareOutline}
                size="large"
                className="ion-margin-top"
              />
            </IonButton>
          </div>
          <IonText color="medium">
            <h2 className="ion-no-margin ion-margin-bottom">{founder}</h2>
          </IonText>
          <IonText>
            <p>{description}</p>
          </IonText>
        </div>
        {/* Social Media Section */}
        <div>
          <div className="ion-float-right ion-margin-end">
            <a href={instagram}>
              <IonIcon icon={logoInstagram} size="large" />
            </a>
            <a href={facebook}>
              <IonIcon
                icon={logoFacebook}
                size="large"
                className="ion-margin-start"
              />
            </a>
          </div>
        </div>
        {/* Team Section */}
        <div>
          {/* Here should be the slider of the team images */}
          <SliderBubble brand={name} />
        </div>
      </div>
    </IonContent>
  );
};

export default DetailsModal;
