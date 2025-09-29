import { useState } from "react";
import "./FormGroup.css";

export default function FormGroup({
  isInput = true,
  extraClass = "",
  title,
  id,
  labelName,
  type = "text",
  placeholder = "",
  isRequired = true,
  sectionContent,
  updateSectionContent,
}) {
  const [inputValue, setInputValue] = useState("");

  const sectionIndex = Array.isArray(sectionContent)
    ? sectionContent.findIndex((item) => item.title === title)
    : -1;

  const fieldValue =
    sectionIndex !== -1 ? sectionContent[sectionIndex].content?.[id] || "" : "";

  const handleValueChange = (e) => {
    const newValue = e.target.value;
    updateSectionContent(title, id, newValue);
  };

  return (
    <div className={`form-group ${extraClass ? extraClass : ""}`}>
      <label className={fieldValue ? "active" : ""} htmlFor={id}>
        {labelName}
      </label>

      {isInput ? (
        <input
          id={id}
          name={id} 
          type={type}
          value={fieldValue}
          placeholder={placeholder}
          required={isRequired}
          onChange={handleValueChange}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={fieldValue}
          required={isRequired}
          onChange={handleValueChange}
          cols="43"
          rows={1}
          wrap="off"
        />
      )}
    </div>
  );
}
