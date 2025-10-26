import { useEffect, useState } from "react";
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
  invalidFields = [],
}) {
  const sectionIndex = Array.isArray(sectionContent)
    ? sectionContent.findIndex((item) => item.title === title)
    : -1;

  const fieldValue =
    sectionIndex !== -1 ? sectionContent[sectionIndex].content?.[id] || "" : "";

  // ✅ Determine if this field is invalid
  const [isInvalid, setIsInvalid] = useState(invalidFields.includes(id));

  // ✅ Keep in sync with parent’s invalidFields array
  useEffect(() => {
    setIsInvalid(invalidFields.includes(id));
  }, [invalidFields, id]);

  const handleValueChange = (e) => {
    const newValue = e.target.value;

    // Update parent content
    updateSectionContent(title, id, newValue);

    // ✅ If user starts typing, remove invalid style
    if (newValue.trim() !== "" && isInvalid) {
      setIsInvalid(false);
    }
  };

  return (
    <div
      className={`form-group ${extraClass ? extraClass : ""} ${
        isInvalid ? "invalid" : ""
      }`}
    >
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
          onFocus={() => setIsInvalid(false)} 
        />
      ) : (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          value={fieldValue}
          required={isRequired}
          onChange={handleValueChange}
          onFocus={() => setIsInvalid(false)}
          cols="43"
          rows={1}
          wrap="off"
        />
      )}
    </div>
  );
}
