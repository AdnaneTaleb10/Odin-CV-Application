import FormGroup from "../FormGroup/FormGroup";
import "./FormSection.css";

export default function FormSection({
  title,
  fields,
  sectionContent,
  updateSectionContent,
}) {
  return (
    <div className="form-section-wrapper">
      <form>
        {fields.map((field, index) => {
          return (
            <FormGroup
              key={index}
              title = {title}
              isInput={field.isInput}
              id={field.id}
              labelName={field.labelName}
              isRequired={field.isRequired}
              sectionContent = {sectionContent}
              updateSectionContent = {updateSectionContent}
            />
          );
        })}
      </form>
    </div>
  );
}
