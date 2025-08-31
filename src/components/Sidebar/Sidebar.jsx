import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Save, ArrowDownFromLine, Book, Trash } from "lucide-react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  const sections = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
  ];

  let [activIndex , setActiveIndex] = useState(null)
  return (

    <div className="sidebar">
      <Logo />
      <div className="sections">
        <h1>Sections:</h1>
        <ul>
          {sections.map((section, index) => (
            <li
              className={activIndex === index ? "active" : ""}
              key={index}
              onClick={() => setActiveIndex(index)}
            >
              {section}
            </li>
          ))}
        </ul>
      </div>
      <div className="buttons">
        <Button className="view-cv-btn">View CV</Button>
        <Button className="save-btn" icon={Save}>
          Save
        </Button>
        <Button className="load-btn" icon={ArrowDownFromLine}>
          Load
        </Button>
        <Button className="load-example-btn" icon={Book}>
          Example
        </Button>
        <Button className="clear-btn" icon={Trash}>
          Clear
        </Button>
      </div>
    </div>
  );
}
