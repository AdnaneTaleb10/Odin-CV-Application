import logo from "../../assets/cv.svg";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="CVLIAN logo" />
      <h1>CVLIAN</h1>
    </div>
  );
}
