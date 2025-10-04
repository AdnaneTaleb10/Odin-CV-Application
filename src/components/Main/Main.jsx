import Button from "../Button/Button";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import "./Main.css";
import FormSection from "../FormSection/FormSection";
import SkillsSection from "../SkillSection/SkillSection";
import Experience from "../Experience/Experience";

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

export default function Main({
  currentSection,
  linkIndex,
  handleIndex,
  sectionContent,
  updateSectionContent,
  removeSectionContent,
}) {
  return (
    <div className="main">
      <h1 className="section-title">{currentSection}</h1>
      {(() => {
        switch (linkIndex) {
          case 2:
            return (
              <SkillsSection
                sectionContent={sectionContent}
                updateSectionContent={updateSectionContent}
                removeSectionContent={removeSectionContent}
              />
            );
          case 3:
            return (
              <Experience
                sectionContent={sectionContent}
                updateSectionContent={updateSectionContent}
              />
            );

          default:
            return formSections.map((section, index) =>
              linkIndex === index ? (
                <FormSection
                  key={index}
                  fields={section.fields}
                  sectionContent={sectionContent}
                  updateSectionContent={updateSectionContent}
                />
              ) : null
            );
        }
      })()}

      <div className="section-navigator">
        {linkIndex > 0 && (
          <Button
            className="preivous-button"
            title="Previous"
            iconPosition="left"
            icon={ChevronLeft}
            onClick={() => {
              handleIndex(linkIndex - 1);
            }}
          />
        )}
        <Button
          className="next-button"
          title="Next"
          icon={ChevronRight}
          onClick={() => {
            handleIndex(linkIndex + 1);
          }}
        />
      </div>
    </div>
  );
}
