import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./CVBulder.css";
import { useState } from "react";

export default function CVBulider() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="cv-builder">
      <Sidebar selectedLink={activeIndex} onLinkChange={setActiveIndex}/>
      <Main linkIndex={activeIndex} handleIndex={changeIndex}/>
    </div>
  );


  function changeIndex(index){
    setActiveIndex(index)
  }
}
