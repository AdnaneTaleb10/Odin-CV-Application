import "./Experience.css";
import HistoryItem from "../HistoryItem/HistoryItem";
import Button from "../Button/Button";
import { Plus } from "lucide-react";

export default function Experience() {
  return (
    <div className="work-experience-container">
      <HistoryItem
        title="Senior Software Developer"
        organization="Optum"
        startDate="03/2021"
        endDate="Present"
        location="London, UK"
        achievements={[
          "Led the integration of critical APIs improving data retrieval speeds by 30%, enhancing overall system performance.",
          "Automated testing processes, reducing manual errors by 25% and streamlining workflow for improved team efficiency.",
          "Collaborated on strategic data migration projects, resulting in a 40% increase in data availability and relevance.",
          "Provided mentorship to junior developers resulting in a 20% improvement in team programming skill proficiency.",
          "Enhanced user experience through thoughtful application design changes, boosting customer satisfaction scores by 10%.",
        ]}
      />

      <Button
        className="add-experience-btn"
        title="Add Work Experience"
        iconPosition="left"
        icon={Plus}
      />
    </div>
  );
}
