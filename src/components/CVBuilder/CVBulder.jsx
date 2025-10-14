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
    "Preview CV"
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
    prev.map((section) => {
      if (section.title !== title) return section;

      if (!Array.isArray(section.content)) {
        return {
          ...section,
          content: {
            ...section.content,
            [fieldId]: value,
          },
        };
      }

      return {
        ...section,
        content: [...section.content, value],
      };
    })
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
  }
}
