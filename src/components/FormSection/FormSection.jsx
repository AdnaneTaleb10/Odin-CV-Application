import FormGroup from "../FormGroup/FormGroup";
import "./FormSection.css";

export default function FormSection({ title, fields }) {
  return (
    <div className="form-section-wrapper">
      <div className="form-section">
        <h1>{title}</h1>
        <form>
          {fields.map((field, index) => {
            return (
              <FormGroup
                key={index}
                isInput={field.isInput}
                id={field.id}
                labelName={field.labelName}
                isRequired={field.isRequired}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
