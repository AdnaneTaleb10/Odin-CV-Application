import Button from "../Button/Button";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import "./Main.css";
import FormSection from "../FormSection/FormSection";
import SkillTag from "../Skill Tag/SkillTag";
import { useState } from "react";

const formSections = [
  {
    title: "Personal Information",
    fields: [
      {
        isInput: true,
        id: "name",
        labelName: "Name",
        isRequired: true,
      },
      {
        isInput: true,
        id: "phone-number",
        labelName: "Phone Number",
        isRequired: true,
      },
      {
        isInput: true,
        id: "email",
        labelName: "Email",
        isRequired: true,
      },
      {
        isInput: true,
        id: "website",
        labelName: "Website [Optional]",
        isRequired: false,
      },
      {
        isInput: true,
        id: "location",
        labelName: "Location",
        isRequired: true,
      },
    ],
  },
  {
    title: "Professional Summary",
    fields: [
      {
        isInput: true,
        id: "role",
        labelName: "Role",
        isRequired: true,
      },
      {
        isInput: false,
        id: "summary",
        labelName: "Summary",
        isRequired: true,
      },
    ],
  },
];

export default function Main({ linkIndex, handleIndex }) {
  const [isSkillFormOpen, setIsSkillFormOpen] = useState(false);
  const [skills, setSkills] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const OpenSkillForm = () => {
    setInputValue("");
    setIsSkillFormOpen(true);
  };

  const closeSkillForm = () => {
    setIsSkillFormOpen(false);
  };

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const addSkill = (e) => {
    const addSkill = () => {
      if (inputValue.trim() !== "") {
        setSkills((prev) => [...prev, inputValue.trim()]);
        setInputValue(""); 
      }
    };
  };

  const removeSkill = (skillName) => {
    setSkills((prev) => prev.filter((s) => s !== skillName));
  };

  return (
    <div className="main">
      {(() => {
        switch (linkIndex) {
          case 2:
            return (
              <>
                <div className="skills-section">
                  <h1>Skills</h1>
                  <div className="skills-container">
                    {skills.map((skill) => (
                      <SkillTag
                        key={skill}
                        skillName={skill}
                        handleDeletion={removeSkill}
                      />
                    ))}
                  </div>
                  {isSkillFormOpen ? (
                    <div className="add-skill-form">
                      <h2>Add Skill</h2>
                      <div className="input-container">
                        <label
                          htmlFor="skill-input"
                          className={inputValue ? "active" : ""}
                        >
                          Skill
                        </label>
                        <input
                          type="text"
                          id="skill-input"
                          placeholder=""
                          value={inputValue}
                          onChange={handleValueChange}
                        />
                      </div>
                      <div className="skill-form-btns">
                        <Button className="add-btn" onClick={addSkill}>
                          Add
                        </Button>
                        <Button className="cancel-btn" onClick={closeSkillForm}>
                          Cancel
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <Button
                      className="add-skill-btn"
                      iconPosition="left"
                      icon={Plus}
                      onClick={OpenSkillForm}
                    >
                      Add Skill
                    </Button>
                  )}
                </div>
              </>
            );

          default:
            return formSections.map((section, index) =>
              linkIndex === index ? (
                <FormSection
                  key={index}
                  title={section.title}
                  fields={section.fields}
                />
              ) : null
            );
        }
      })()}

      <div className="section-navigator">
        {linkIndex > 0 && (
          <Button
            className="preivous-button"
            iconPosition="left"
            icon={ChevronLeft}
            onClick={() => handleIndex(linkIndex - 1)}
          >
            Previous
          </Button>
        )}
        <Button
          className="next-button"
          icon={ChevronRight}
          onClick={() => handleIndex(linkIndex + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
