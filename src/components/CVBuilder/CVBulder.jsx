import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./CVBulder.css";

export default function CVBulider() {
  return (
    <div className="cv-builder">
      <Sidebar />
      <Main />
    </div>
  );
}
