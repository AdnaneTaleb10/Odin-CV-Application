import "./Experience.css";
import HistoryItem from "../HistoryItem/HistoryItem";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import FormSection from "../FormSection/FormSection";
import { useState } from "react";

// Define the form fields
const formFields = [
  { label: "Position", id: "position" },
  { label: "Organization", id: "organization" },
  { label: "Location", id: "location" },
  { label: "From", id: "startDate", inputType: "date" },
  { label: "To", id: "endDate", inputType: "date" },
];

export default function Experience() {
  const [isFormOpened, setIsFormOpened] = useState(false);

  // state for experiences (multiple HistoryItem)
  const [experiences, setExperiences] = useState([]);

  // state for current form inputs
  const [sectionContent, setSectionContent] = useState({});

  // update form field values
  function updateSectionContent(sectionTitle, fieldId, value) {
    setSectionContent((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  }

  // add a new experience from the form
  function handleAddExperience(accomplishments = []) {
    const newExperience = {
      position: sectionContent.position,
      organization: sectionContent.organization,
      location: sectionContent.location,
      startDate: sectionContent.startDate,
      endDate: sectionContent.endDate,
      achievements: accomplishments,
    };

    setExperiences((prev) => [...prev, newExperience]);

    // reset form + close
    setSectionContent({});
    setIsFormOpened(false);
  }

  return (
    <div className="work-experience-container">
      {/* Render all experiences */}
      {experiences.map((exp, idx) => (
        <HistoryItem
          key={idx}
          title={exp.position}
          organization={exp.organization}
          startDate={exp.startDate}
          endDate={exp.endDate}
          location={exp.location}
          achievements={exp.achievements}
        />
      ))}

      {isFormOpened ? (
        <FormSection
          title="Add Experience"
          fields={formFields}
          sectionContent={sectionContent}
          updateSectionContent={updateSectionContent}
          formType="inline"
          showControls={true}
          showForm={setIsFormOpened}
          withAccomplishments={true}
          // Pass callback so Add button can insert a new HistoryItem
          onAdd={handleAddExperience}
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
