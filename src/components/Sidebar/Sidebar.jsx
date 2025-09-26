import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import { Save, ArrowDownFromLine, Book, Trash } from "lucide-react";
import "./Sidebar.css";
import { useState } from "react";

export default function Sidebar({ selectedLink, onLinkChange }) {
  const sections = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
  ];

  return (
    <div className="sidebar">
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
      <div className="buttons">
        <Button className="view-cv-btn" title="ViewCV" />

        <Button className="save-btn" title="Save" icon={Save} />

        <Button className="load-btn" title="Load" icon={ArrowDownFromLine} />

        <Button className="load-example-btn" title="Example" icon={Book} />

        <Button className="clear-btn" title="Clear" icon={Trash} />
      </div>
    </div>
  );
}
