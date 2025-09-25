import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./CVBulder.css";
import { useState } from "react";

export default function CVBulider() {
    const sections = [
    "Work Experience",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionName, setSectionName] = useState(sections[0]);


  return (
    <div className="cv-builder">
      <Sidebar selectedLink={activeIndex} onLinkChange={changeIndex}/>
      <Main currentSection={sectionName}  linkIndex={activeIndex} handleIndex={changeIndex}/>
    </div>
  );

  function changeIndex(index){
    setActiveIndex(index)
    setSectionName(sections[index])
  }
}
