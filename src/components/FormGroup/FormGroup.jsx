import { useState } from "react";
import "./FormGroup.css";

export default function   FormGroup({
  isInput = true,
  id,
  labelName,
  type = "text",
  placeholder = "",
  isRequired = true,
}) {
  const [inputValue, setInputValue] = useState("");

  const handleValueChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="form-group">
      <label className={inputValue ? "active" : ""} htmlFor={id}>
        {labelName}
      </label>

      {isInput ? (
        <input
          id={id}
          name={id}
          type={type}
          placeholder={placeholder}
          required={isRequired}
          onChange={handleValueChange}
        />
      ) : (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
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
