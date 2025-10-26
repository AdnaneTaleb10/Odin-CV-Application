import "./Experience.css";
import HistoryItem from "../HistoryItem/HistoryItem";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import FormSection from "../FormSection/FormSection";
import { useState } from "react";

const formFields = [
  { label: "Position", id: "position" },
  { label: "Organization", id: "organization" },
  { label: "Location", id: "location" },
  { label: "From", id: "startDate", inputType: "date" },
  { label: "To", id: "endDate", inputType: "date" },
];

export default function Experience({
  sectionContent,
  updateSectionContent,
  removeSectionContent,
}) {
  const [isFormOpened, setIsFormOpened] = useState(false);

  // extract work experience data for this section
  const experiences =
    sectionContent.find((section) => section.title === "Work Experience")
      ?.content || [];

  function handleAddExperience(newExperience) {
    updateSectionContent("Work Experience", null, newExperience);
    setIsFormOpened(false); // this hides the form
  }

  function removeExperience(experience) {
    removeSectionContent("Work Experience", experience);
  }

  return (
    <div className="work-experience-container">
      {experiences.map((exp, idx) => (
        <HistoryItem
          key={idx}
          title={exp.position}
          organization={exp.organization}
          startDate={exp.startDate}
          endDate={exp.endDate}
          location={exp.location}
          achievements={exp.achievements}
          handleDeletion={() => removeExperience(exp)}
        />
      ))}

      {isFormOpened ? (
        <FormSection
          showTitle={true}
          title="Add Experience"
          fields={formFields}
          formType="inline"
          showControls={true}
          showForm={setIsFormOpened}
          withAccomplishments={true}
          onAdd={handleAddExperience}
          sectionContent={sectionContent}
          updateSectionContent={updateSectionContent}
        />
      ) : (
        <Button
          className="add-experience-btn"
          title="Add Work Experience"
          iconPosition="left"
          icon={Plus}
          onClick={() => setIsFormOpened(true)}
        />
      )}
    </div>
  );
}
