import HistoryItem from "../HistoryItem/HistoryItem";
import FormSection from "../FormSection/FormSection";
import Button from "../Button/Button";
import { Plus } from "lucide-react";
import "./Education.css";

const formFields = [
  { label: "Degree", id: "degree" },
  { label: "Institution", id: "institution" },
  { label: "Location", id: "location" },
  { label: "From", id: "startDate", inputType: "date" },
  { label: "To", id: "endDate", inputType: "date" },
];

export default function Education() {
  return (
    <div className="education-container">
      <HistoryItem
        title="Associate Degree in Computer Science"
        organization="Portsmouth College"
        startDate="01/2013"
        endDate="01/2015"
        location="Portsmouth, UK"
      />

      <FormSection
        title="Add Degree"
        fields={formFields}
        sectionContent=""
        updateSectionContent=""
        formType="inline"
        showForm=""
      />

      <Button
        className="add-experience-btn"
        title="Add Degree"
        iconPosition="left"
        icon={Plus}
      />
    </div>
  );
}
