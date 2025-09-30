import FormGroup from "../FormGroup/FormGroup";
import InlineFormGroup from "../InlineFormGroup/InlineFormGroup";
import "./FormSection.css";

export default function FormSection({
  title,
  fields,
  sectionContent,
  updateSectionContent,
  formType = "standard", // "standard" | "inline"
}) {
  return (
    <div className="form-section-wrapper">
      <form>
        {fields.map((field, index) => {
          if (formType === "inline") {
            return (
              <InlineFormGroup
                key={index}
                label={field.labelName}
                inputType={field.inputType || "text"}
                id={field.id}
                placeholder={field.placeholder || ""}
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
            />
          );
        })}
      </form>
    </div>
  );
}
