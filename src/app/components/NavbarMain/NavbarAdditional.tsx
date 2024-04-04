import React from "react";
import Container from "../molecolar/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faMailchimp,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMailReply } from "@fortawesome/free-solid-svg-icons/faMailReply";

const NavbarAdditional = () => {
  return (
    <Container customClass="navbar-additional">
      <div className="contacts">
        <div className="question">Question?</div>
        <div className="info__content">
          <FontAwesomeIcon className="contacts__icon" icon={faPhone} />
          <div className="contacts__info">+39 339667793</div>
        </div>
        <div className="info__content">
          <FontAwesomeIcon className="contacts__icon" icon={faEnvelope} />
          <div className="contacts__info">username@domain.com</div>
        </div>
      </div>
      <div className="socials">
        <div className="question">Seguici su</div>
        <FontAwesomeIcon
          className="navbarAdditional__social"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          className="navbarAdditional__social"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          className="navbarAdditional__social"
          icon={faInstagram}
        />
      </div>
    </Container>
  );
};

export default NavbarAdditional;
