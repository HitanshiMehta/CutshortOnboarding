import "./Input.scss";

export const Input = ({
  label,
  sublabel,
  value,
  handleChange,
  placeholder,
  name,
  className,
  urlMsg,
}) => {
  return (
    <div>
      <div className="input-label">
        {label}
        <label className="input-sub-label">{sublabel}</label>
      </div>
      <div className="input-container">
        {urlMsg && <div className="url-container">{urlMsg}</div>}
        <input
          type="text"
          className={`common-input ${className} ${urlMsg ? 'url-added' : ''}`}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
