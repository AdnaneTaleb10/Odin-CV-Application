import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import "./CVBuilder.css";
import { useEffect, useState } from "react";
import { getContent, setContent } from "../../utils/localStorage";

export default function CVBuilder() {
  const sections = [
    "Personal Information",
    "Professional Summary",
    "Skills",
    "Work Experience",
    "Education",
    "Preview CV",
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
  const [isCvExampleLoaded, setIsCvExampleLoaded] = useState(false);

  function loadCvExample() {
    if (!isCvExampleLoaded) {
      setSectionContent([
        {
          title: "Personal Information",
          content: {
            name: "John Doe",
            phoneNumber: "+69 1234567890",
            email: "johndoe@gmail.com",
            website: "johndoe.com",
            location: "Portsmouth, UK",
          },
        },
        {
          title: "Professional Summary",
          content: {
            role: "Software Developer",
            summary:
              "A seasoned developer with over 8 years of experience in software integration and security-oriented solutions. Proficient in Salesforce and Agile Scrum methodologies, my biggest achievement includes boosting system performance by 30% through API integration.",
          },
        },
        {
          title: "Skills",
          content: [
            "Salesforce",
            "Agile Scrum",
            "JavaScript",
            "Angular",
            "Ajax",
            "React",
            "NextJS",
            "CI/CD",
            "Test-Driven Development",
            "Object-Oriented Design",
          ],
        },
        {
          title: "Work Experience",
          content: [
            {
              position: "Senior Software Developer",
              organization: "Optum",
              startDate: "05/03/2021",
              endDate: "22/03/2023",
              location: "London, UK",
              achievements: [
                "Led the integration of critical APIs improving data retrieval speeds by 30%, enhancing overall system performance.",
                "Automated testing processes, reducing manual errors by 25% and streamlining workflow for improved team efficiency.",
                "Collaborated on strategic data migration projects, resulting in a 40% increase in data availability and relevance.",
                "Provided mentorship to junior developers resulting in a 20% improvement in team programming skill proficiency.",
                "Enhanced user experience through thoughtful application design changes, boosting customer satisfaction scores by 10%.",
              ],
            },
            {
              position: "Software Engineer",
              organization: "UnitedHealth Group",
              startDate: "01/06/2018",
              endDate: "28/03/2023",
              location: "Dublin, Ireland",
              achievements: [
                "Developed tailored software applications that met client specifications, improving operational efficiency by 35%.",
                "Worked in an Agile Scrum environment to achieve timely delivery of project milestones, reducing time-to-market by 20%.",
                "Enhanced automation mechanisms that saved an average of 15 hours per week across development processes.",
                "Conducted comprehensive debugging sessions resulting in the identification and resolution of complex issues.",
                "Supported team efforts in maintaining system stability, ensuring an uptime of 99.8% over a 12-month period.",
              ],
            },
            {
              position: "Junior Developer",
              organization: "Tech Data UK",
              startDate: "23/01/2015",
              endDate: "05/05/2018",
              location: "Basingstoke, UK",
              achievements: [
                "Assisted in software development projects that improved system scalability by 25%, enhancing user experience.",
                "Participated in weekly team standups to align project goals and foster a collaborative work environment.",
                "Contributed to the development of a user-friendly API interface, reducing customer support queries by 15%.",
                "Provided input in the development of risk management tools, resulting in a more secure data handling process.",
              ],
            },
          ],
        },
        {
          title: "Education",
          content: [
            {
              degree: "Associate Degree in Computer Science",
              institution: "Portsmouth College",
              startDate: "10/01/2013",
              endDate: "01/2015",
              location: "Portsmouth, UK",
              achievements: [],
            },
          ],
        },
      ]);

      setIsCvExampleLoaded(true);
    } else {
      const confirmLoad = window.confirm(
        "Your current work will be lost. Do you want to continue?"
      );

      if (confirmLoad) {
        setSectionContent([
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
        setIsCvExampleLoaded(false);
      }
    }
  }

  function clearCv() {
    const confirmClear = window.confirm(
      "sYour current work will be deleted. Do you want to continue?"
    );

    if (confirmClear) {
      setSectionContent([
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
    }
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

  function handleLoadCv() {
    const saved = getContent("cv-section-content");
    console.log(saved);
    if (saved) {
      setSectionContent(saved);
    }
  }

  function handleSaveCv() {
    const existingCv = getContent("cv-section-content");

    if (existingCv) {
      const confirmOverwrite = window.confirm(
        "A saved CV already exists. Saving now will overwrite it. Do you want to continue?"
      );

      if (!confirmOverwrite) {
        alert("Save cancelled.");
        return;
      }
    }

    setContent("cv-section-content", sectionContent);
    alert("CV saved successfully!");
  }

  const [invalidFields, setInvalidFields] = useState([]);

  function validateCurrentSection(linkIndex) {
    // Import formSections here or define them at the top of the file
    const formSections = [
      {
        title: "Personal Information",
        fields: [
          { id: "name", isRequired: true },
          { id: "phoneNumber", isRequired: true },
          { id: "email", isRequired: true },
          { id: "website", isRequired: false },
          { id: "location", isRequired: true },
        ],
      },
      {
        title: "Professional Summary",
        fields: [
          { id: "role", isRequired: true },
          { id: "summary", isRequired: true },
        ],
      },
    ];

    const section = formSections.find((_, index) => index === linkIndex);
    if (!section) return true; // Non-form sections (like Skills, Work Experience, etc.)

    const currentSectionData =
      sectionContent.find((s) => s.title === section.title)?.content || {};

    const emptyRequiredFields = section.fields
      .filter((f) => f.isRequired && !currentSectionData[f.id])
      .map((f) => f.id);

    setInvalidFields(emptyRequiredFields);
    return emptyRequiredFields.length === 0;
  }

  function changeIndex(index) {
    // ✅ Validate the current section before switching
    const isValid = validateCurrentSection(activeIndex);
    if (!isValid) return; // Block sidebar navigation if invalid

    setActiveIndex(index);
  }

  return (
    <div className="cv-builder">
      <Sidebar
        selectedLink={activeIndex}
        onLinkChange={changeIndex}
        handleSaveCv={handleSaveCv}
        handleLoadCv={handleLoadCv}
        loadCvExample={loadCvExample}
        clearCv={clearCv}
        isCvExampleLoaded={isCvExampleLoaded}
      />
      <Main
        currentSection={sections[activeIndex]}
        linkIndex={activeIndex}
        handleIndex={changeIndex}
        sectionContent={sectionContent}
        updateSectionContent={updateSectionContent}
        removeSectionContent={removeSectionContent}
        invalidFields={invalidFields} 
      />
    </div>
  );
}
