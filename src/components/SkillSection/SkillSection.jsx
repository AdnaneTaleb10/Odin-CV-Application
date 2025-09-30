import { useState } from "react";
import { Plus } from "lucide-react";
import Button from "../Button/Button";
import SkillTag from "../Skill Tag/SkillTag";
import "./SkillSection.css";
import InlineFormGroup from "../InlineFormGroup/InlineFormGroup";

export default function SkillsSection({
  sectionContent,
  updateSectionContent,
  removeSectionContent,
}) {
  const [isSkillFormOpen, setIsSkillFormOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const skills = sectionContent[2].content;

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  const addSkill = () => {
    if (inputValue.trim() !== "") {
      updateSectionContent("Skills", "", inputValue);
      setInputValue("");
      setIsSkillFormOpen(false);
    }
  };

  const removeSkill = (skillName) => {
    removeSectionContent("Skills", skillName);
  };

  return (
    <div className="skills-section">
      <div className="skills-container">
        {skills.map((skill) => (
          <SkillTag
            key={skill}
            skillName={skill}
            handleDeletion={() => removeSkill(skill)}
          />
        ))}
      </div>

      {isSkillFormOpen ? (
        <div className="add-skill-form">
          <h2>Add Skill</h2>

          <InlineFormGroup
            label="Skill"
            inputType="text"
            id="skill-input"
            placeholder=""
            value={inputValue}
            onChange={handleValueChange}
          />

          <div className="skill-form-btns">
            <Button className="add-btn" title="Add" onClick={addSkill} />
            <Button
              className="cancel-btn"
              title="Cancel"
              onClick={() => setIsSkillFormOpen(false)}
            />
          </div>
        </div>
      ) : (
        <Button
          className="add-skill-btn"
          title="Add Skill"
          iconPosition="left"
          icon={Plus}
          onClick={() => setIsSkillFormOpen(true)}
        />
      )}
    </div>
  );
}
