import Logo from "../../assets/images/logo.png";
import "./Header.scss";

export const CommonHeader = () => (
  <div className="header-container d-flex">
    <img src={Logo} className="logo" alt="logo" />
    <div className="header-title bold-txt">Eden</div>
  </div>
);
