import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./CVBulder.css";
import { useState } from "react";

export default function CVBulider() {
  const sections = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [sectionContent, setSectionContent] = useState([
    {
      title: "Personal Information",
      content: {
        name: "",
        phoneNumber: "",
        email: "",
        website: "",
        location: "",
      },
    },
    {
      title: "Professional Summary",
      content: {
        role: "",
        summary: "",
      },
    },
    {
      title: "Skills",
      content: [],
    },
    {
      title: "Work Experience",
      content: [],
    },
    {
      title: "Education",
      content: [],
    },
  ]);

  function updateSectionContent(title, fieldId, value) {
    setSectionContent((prev) =>
      prev.map((section) =>
        section.title === title
          ? {
              ...section,
              content: Array.isArray(section.content)
                ? [...section.content, value]
                : { ...section.content, [fieldId]: value },
            }
          : section
      )
    );
  }

  function removeSectionContent(title, value) {
    setSectionContent((prev) =>
      prev.map((section) =>
        section.title === title
          ? {
              ...section,
              content: section.content.filter((element) => element !== value),
            }
          : section
      )
    );
  }

  return (
    <div className="cv-builder">
      <Sidebar selectedLink={activeIndex} onLinkChange={changeIndex} />
      <Main
        currentSection={sections[activeIndex]}
        linkIndex={activeIndex}
        handleIndex={changeIndex}
        sectionContent={sectionContent}
        updateSectionContent={updateSectionContent}
        removeSectionContent={removeSectionContent}
      />
    </div>
  );

  function changeIndex(index) {
    setActiveIndex(index);
    /* setSectionName(sections[index]); */
  }
}
