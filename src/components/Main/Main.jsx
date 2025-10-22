import Button from "../Button/Button";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import "./Main.css";
import FormSection from "../FormSection/FormSection";
import SkillsSection from "../SkillSection/SkillSection";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import CVPreview from "../CVPreview/CVPreview";

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
        id: "phoneNumber",
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
                removeSectionContent={removeSectionContent}
              />
            );
          case 4:
            return (
              <Education
                sectionContent={sectionContent}
                updateSectionContent={updateSectionContent}
                removeSectionContent={removeSectionContent}
              />
            );
          case 5:
            return (
              <CVPreview
                sectionContent={sectionContent}
                editCv={() => handleIndex(1)}
              />
            );

          default:
            return formSections.map((section, index) =>
              linkIndex === index ? (
                <FormSection
                  key={index}
                  title={section.title}
                  fields={section.fields}
                  sectionContent={sectionContent}
                  updateSectionContent={updateSectionContent}
                />
              ) : null
            );
        }
      })()}

      <div className="section-navigator">
        {/** Before moving to the next section, I must check if the required information are entered, if no then highlight the empty field with red */}
        {linkIndex >= 0 && linkIndex !== 5 ? (
          <>
            <Button
              className="previous-button"
              title="Previous"
              iconPosition="left"
              icon={ChevronLeft}
              onClick={() => handleIndex(linkIndex - 1)}
            />

            <Button
              className="next-button"
              title={linkIndex === 4 ? "View CV" : "Next"}
              icon={ChevronRight}
              onClick={() => {
                console.log(sectionContent), handleIndex(linkIndex + 1);
              }}
            />
          </>
        ) : linkIndex === 5 ? (
          <div className="edit-button-wrapper">
            <Button
              className="edit-cv-button"
              title="Edit CV"
              onClick={() => handleIndex(0)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
