import FormGroup from "../FormGroup/FormGroup";
import InlineFormGroup from "../InlineFormGroup/InlineFormGroup";
import Button from "../Button/Button";
import "./FormSection.css";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FormSection({
  showTitle = false,
  title = "",
  fields = [],
  formType = "standard", 
  showControls = false,
  showForm,
  sectionContent,
  updateSectionContent,
  withAccomplishments = false,
  onAdd, 
  invalidFields
}) {

  const [formData, setFormData] = useState({});
  const [accomplishments, setAccomplishments] = useState([]);

  function handleFieldChange(fieldId, value) {
    setFormData((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  }

  function addAccomplishment(newItem) {
    setAccomplishments((prev) => [...prev, newItem]);
  }

  function handleAdd(e) {
    e.preventDefault();
    if (onAdd) {
      onAdd({ ...formData, achievements: accomplishments });
    }
    setFormData({});
    setAccomplishments([]);
  }

  return (
    <div
      className={`form-section-wrapper ${
        formType === "inline" ? "inline" : ""
      }`}
    >
      {showTitle && <h2 className="form-section-title">{title}</h2>}

      <form>
        {fields.map((field, index) => {
          const value = formData[field.id] || "";

          if (formType === "inline") {
            return (
              <InlineFormGroup
                key={index}
                label={field.label}
                inputType={field.inputType}
                id={field.id}
                placeholder={field.placeholder}
                value={value}
                onChange={(e) => handleFieldChange(field.id, e.target.value)}
              />
            );
          }

          return (
            <FormGroup
              key={index}
              title={title}
              isInput={field.isInput}
              id={field.id}
              labelName={field.labelName}
              isRequired={field.isRequired}
              sectionContent={sectionContent}
              updateSectionContent={updateSectionContent}
              invalidFields={invalidFields}
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
            <Button className="add-btn" title="Add" onClick={handleAdd} />
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
