import Button from "../Button/Button";
import { ChevronRight, ChevronLeft } from "lucide-react";
import "./Main.css";
import FormSection from "../FormSection/FormSection";

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

export default function Main({ linkIndex }) {
  return (
    <div className="main">
      {formSections.map(
        (section, index) =>
          linkIndex === index && (
            <FormSection
              key={index}
              title={section.title}
              fields={section.fields}
            />
          )
      )}

      <div className="section-navigator">
        <Button
          className="preivous-button"
          iconPosition="left"
          icon={ChevronLeft}
        >
          Previous
        </Button>
        <Button className="next-button" icon={ChevronRight}>
          Next
        </Button>
      </div>
    </div>
  );
}
