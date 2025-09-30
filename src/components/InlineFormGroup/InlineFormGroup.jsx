import "./InlineFormGroup.css";

export default function InlineFormGroup({
  label,
  inputType = "text",
  id,
  placeholder = "",
  value,
  onChange,
}) {
  return (
    <div className="inline-form-group">
      <label htmlFor={id} className={value ? "active" : ""}>
        {label}
      </label>
      <input
        type={inputType}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
