import "./header.css";
import { HEADER_DATA } from "../../../constant/index";
import { LogoGithub, Call, Mail, LogoLinkedin } from "react-ionicons";

function Header() {
  return (
    <header>
      <div className="name"><h1>{HEADER_DATA.name}</h1></div>
      <div className="links">
        <a className="flexCenter">
          <span className="link_logo">
            <Mail color='white'   height="18px" width="18px"/>
          </span>
          <span>{HEADER_DATA.email}</span>
        </a>
        <a>
          <span>
            <Call color='white'   height="18px" width="18px" />
          </span>
          <span>{HEADER_DATA.phoneNumber}</span>
        </a>
        <a>
          <span>
            <LogoGithub color='white'   height="18px" width="18px"/>
          </span>
          <span>{HEADER_DATA.github}</span>
        </a>
        <a>
          <span>
            <LogoLinkedin color='white'   height="18px" width="18px"/>
          </span>
          <span >{HEADER_DATA.linkedIn}</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
