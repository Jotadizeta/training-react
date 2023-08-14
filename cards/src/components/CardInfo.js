import "./CardInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faEnvelope,
  faDollarSign,
  faAddressBook,
  faPhoneFlip,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

function CardInfo() {
  return (
    <div className="info-container">
      <h3>MR ROBERT</h3>
      <p>UI-UX DESIGN</p>
      <div className="hire">
        <div>
          Rate: <span className="price">$85/hr</span>
        </div>
        <button className="hire-button">Hire Me</button>
      </div>
      <div className="rating">
        <div>5.0</div>
        <div>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </div>
        <div>(105 Reviews)</div>
      </div>
      <div className="icons">
        <div className="verified">
          <FontAwesomeIcon icon={faCircleCheck} />
          <span>Verified</span>
        </div>
        <span className="circle avaiable">
          <FontAwesomeIcon icon={faDollarSign} />
        </span>
        <span className="circle avaiable">
          <FontAwesomeIcon icon={faEnvelope} />
        </span>
        <span className="circle not-avaiable">
          <FontAwesomeIcon icon={faAddressBook} />
        </span>
        <span className="circle not-avaiable">
          <FontAwesomeIcon icon={faPhoneFlip} />
        </span>
      </div>
    </div>
  );
}

export default CardInfo;
