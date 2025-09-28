import Button from "../Button/Button";
import { ChevronRight, ChevronLeft, Plus } from "lucide-react";
import "./Main.css";
import FormSection from "../FormSection/FormSection";
import SkillsSection from "../SkillSection/SkillSection";
import { use, useState } from "react";
import HistoryItem from "../HistoryItem/HistoryItem";

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

export default function Main({ currentSection, linkIndex, handleIndex }) {
  return (
    <div className="main">
      <h1 className="section-title">{currentSection}</h1>
      {(() => {
        switch (linkIndex) {
          case 2:
            return <SkillsSection />;
          case 3:
            return (
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
            );

          default:
            return formSections.map((section, index) =>
              linkIndex === index ? (
                <FormSection key={index} fields={section.fields} />
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
