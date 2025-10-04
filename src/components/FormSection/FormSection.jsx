import FormGroup from "../FormGroup/FormGroup";
import InlineFormGroup from "../InlineFormGroup/InlineFormGroup";
import Button from "../Button/Button";
import "./FormSection.css";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FormSection({
  title = "", // NEW optional title
  fields,
  sectionContent,
  updateSectionContent,
  formType = "standard", // "standard" | "inline"
  showControls = false,
  showForm,
  withAccomplishments = false, // NEW prop
  onAdd,
}) {
  const [accomplishments, setAccomplishments] = useState([]);

  function addAccomplishment(newItem) {
    setAccomplishments((prev) => [...prev, newItem]);
  }

  return (
    <div
      className={`form-section-wrapper ${
        formType === "inline" ? "inline" : ""
      }`}
    >
      {/* Render title only if it's passed */}
      {title && <h2 className="form-section-title">{title}</h2>}

      <form>
        {fields.map((field, index) => {
          if (formType === "inline") {
            return (
              <InlineFormGroup
                key={index}
                label={field.label}
                inputType={field.inputType}
                id={field.id}
                placeholder={field.placeholder}
                value={sectionContent[field.id] || ""}
                onChange={(e) =>
                  updateSectionContent(title, field.id, e.target.value)
                }
              />
            );
          }

          return (
            <FormGroup
              key={index}
              isInput={field.isInput}
              id={field.id}
              labelName={field.labelName}
              isRequired={field.isRequired}
              sectionContent={sectionContent}
              updateSectionContent={updateSectionContent}
            />
          );
        })}

        {withAccomplishments && (
          <div className="accomplishments-section">
            <h3>Accomplishments</h3>

            <ul>
              {accomplishments.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <Button
              title="Add Accomplishment"
              className="add-accomplishment-btn"
              icon={Plus}
              onClick={(e) => {
                e.preventDefault();
                const newItem = prompt("Enter accomplishment:");
                if (newItem) addAccomplishment(newItem);
              }}
            />
          </div>
        )}

        {showControls && (
          <div className="control-btns">
            <Button
              className="add-btn"
              title="Add"
              onClick={(e) => {
                e.preventDefault();
                if (onAdd) onAdd(accomplishments); 
              }}
            />
            <Button
              className="cancel-btn"
              title="Cancel"
              onClick={() => showForm(false)}
            />
          </div>
        )}
      </form>
    </div>
  );
}
