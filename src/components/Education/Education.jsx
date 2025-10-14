import HistoryItem from "../HistoryItem/HistoryItem";
import FormSection from "../FormSection/FormSection";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import "./Education.css";
import { useState } from "react";

const formFields = [
  { label: "Degree", id: "degree" },
  { label: "Institution", id: "institution" },
  { label: "Location", id: "location" },
  { label: "From", id: "startDate", inputType: "date" },
  { label: "To", id: "endDate", inputType: "date" },
];

export default function Education({
  sectionContent,
  updateSectionContent,
  removeSectionContent,
}) {
  const [isFormOpened, setIsFormOpened] = useState(false);
  const degrees =
    sectionContent.find((sec) => sec.title === "Education")?.content || [];

  function handleAddDegree(newDegree) {
    updateSectionContent("Education", null, newDegree);
    setIsFormOpened(false);
  }

  function removeDegree(degree) {
    removeSectionContent("Education", degree);
  }

  return (
    <div className="education-container">
      {degrees.map((deg, idx) => (
        <HistoryItem
          key={idx}
          title={deg.degree}
          organization={deg.institution}
          startDate={deg.startDate}
          endDate={deg.endDate}
          location={deg.location}
          handleDeletion={() => removeDegree(deg)}
        />
      ))}

      {isFormOpened ? (
        <FormSection
          showTitle={true}
          title="Add Degree"
          fields={formFields}
          formType="inline"
          showForm=""
          showControls={true}
          onAdd={handleAddDegree}
          sectionContent={sectionContent}
          updateSectionContent={updateSectionContent}
        />
      ) : (
        <Button
          className="add-experience-btn"
          title="Add Degree"
          iconPosition="left"
          icon={Plus}
          onClick={() => setIsFormOpened(true)}
        />
      )}
    </div>
  );
}
