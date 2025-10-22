import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Save, ArrowDownFromLine, Book, Trash } from "lucide-react";
import "./Sidebar.css";
import { getContent, setContent } from "../../utils/localStorage";

export default function Sidebar({
  selectedLink,
  onLinkChange,
  handleSaveCv,
  handleLoadCv,
  loadCvExample,
  clearCv,
  isCvExampleLoaded,
}) {
  const sections = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <Logo />
        <div className="sections">
          <h1>Sections:</h1>
          <ul>
            {sections.map((section, index) => (
              <li
                className={selectedLink === index ? "active" : ""}
                key={index}
                onClick={() => onLinkChange(index)}
              >
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="buttons">
        <Button
          className={`view-cv-btn ${isCvExampleLoaded ? "active" : ""}`}
          title="View CV"
          onClick={() => onLinkChange(5)}
        />
        <Button
          className="save-btn"
          title="Save"
          icon={Save}
          onClick={handleSaveCv}
        />
        <Button
          className="load-btn"
          title="Load"
          icon={ArrowDownFromLine}
          onClick={handleLoadCv}
        />
        <Button
          className="load-example-btn"
          title="Example"
          icon={Book}
          onClick={loadCvExample}
        />
        <Button
          className="clear-btn"
          title="Clear"
          icon={Trash}
          onClick={clearCv}
        />
      </div>
    </div>
  );
}
