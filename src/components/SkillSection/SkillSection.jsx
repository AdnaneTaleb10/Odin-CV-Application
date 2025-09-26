import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../Button/Button";
import SkillTag from "../Skill Tag/SkillTag";
import "./SkillSection.css";

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
              placeholder=""
              onChange={handleValueChange}
            />
          </div>
          <div className="skill-form-btns">
            <Button className="add-btn" title="Add" onClick={addSkill} />

            <Button
              className="cancel-btn"
              title="Cancel"
              onClick={closeSkillForm}
            />
          </div>
        </div>
      ) : (
        <Button
          className="add-skill-btn"
          title="Add Skill"
          iconPosition="left"
          icon={Plus}
          onClick={openSkillForm}
        />
      )}
    </div>
  );
}
