import { useState } from "react";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import SkillTag from "../Skill Tag/SkillTag";
import './SkillSection.css'

export default function SkillsSection() {
  const [skills, setSkills] = useState([]);
  const [isSkillFormOpen, setIsSkillFormOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const openSkillForm = () => {
    setInputValue("");
    setIsSkillFormOpen(true);
  };

  const closeSkillForm = () => {
    setIsSkillFormOpen(false);
  };

  const handleValueChange = (e) => setInputValue(e.target.value);

  const addSkill = () => {
    if (inputValue.trim() !== "") {
      setSkills((prev) => [...prev, inputValue.trim()]);
      setInputValue("");
    }
    setIsSkillFormOpen(false);
  };

  const removeSkill = (skillName) => {
    setSkills((prev) => prev.filter((s) => s !== skillName));
  };

  return (
    <div className="skills-section">
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
            <label htmlFor="skill-input" className={inputValue ? "active" : ""}>
              Skill
            </label>
            <input
              type="text"
              id="skill-input"
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
          onClick={openSkillForm}
        >
          Add Skill
        </Button>
      )}
    </div>
  );
}
