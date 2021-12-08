import { IonButton, IonContent, IonIcon, IonText } from "@ionic/react";
import {
  arrowBackOutline,
  heartOutline,
  logoFacebook,
  logoInstagram,
  shareOutline,
} from "ionicons/icons";
import "./DetailsModal.css";
import BubbleItem from "./TeamBubbles/BubbleItem";

interface ModalProps {
  brandName: string;
  brandFounder: string;
  brandImgPath: string;
  brandDescription: string;
  clickHandler: () => void;
}

const DetailsModal: React.FC<ModalProps> = (props) => {
  return (
    <IonContent>
      <div className="details-container">
        {/* Image Section with buttons */}
        <img src={props.brandImgPath} />
        <div className="btn back">
          <IonButton onClick={props.clickHandler} color="light">
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
              <h1 className="ion-no-margin ion-margin-top">
                {props.brandName}
              </h1>
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
            <h2 className="ion-no-margin ion-margin-bottom">
              {props.brandFounder}
            </h2>
          </IonText>
          <IonText>
            <p>{props.brandDescription}</p>
          </IonText>
        </div>
        {/* Social Media Section */}
        <div>
          <div className="ion-float-right ion-margin-end">
            <a href="https://www.instagram.com">
              <IonIcon icon={logoInstagram} size="large" />
            </a>
            <a href="https://www.facebook.com">
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
          <IonText>
            <h3 className="ion-margin-start">Equipo:</h3>
          </IonText>
          <BubbleItem
            img_url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFkEnG-lDOcZHEsEHa3IlcOU_J2pgjUM1ZaVyYZUxj5em-1OIAZuKj2Ox74G4u7s8bBA&usqp=CAU'
            name = 'Ruy'
            role = 'Programador'

          />
          
          {/* Here should be the slider of the team images */}
        </div>
      </div>
    </IonContent>
  );
};

export default DetailsModal;
