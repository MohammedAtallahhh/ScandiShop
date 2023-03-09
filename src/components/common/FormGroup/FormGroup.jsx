import "./FormGroup.css";
const FormGroup = ({ id, type = "text", label, error, ...otherProps }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} {...otherProps} />
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default FormGroup;
