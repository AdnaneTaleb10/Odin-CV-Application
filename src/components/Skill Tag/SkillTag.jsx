import { Trash } from "lucide-react";
import "./SkillTag.css";

export default function SkillTag({ skillName , handleDeletion}) {
  return (
    <div className="skill-container">
      <p>{skillName}</p>
      <button className="remove-button" onClick={() => handleDeletion(skillName)}>
        <Trash/>
      </button>
    </div>
  );
}
