import { useRef } from "react";

const Checkbox = ({ label, onChange, checked }) => {
  const inputRef = useRef();

  const onChangeCheckbox = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };

  return (
    <label className="custom-checkbox">
      <input
        type="checkbox"
        ref={inputRef}
        onChange={onChangeCheckbox}
        checked={checked}
      />
      <span className="custom-checkbox__checkmark">
        <i className="bx bx-check"></i>
      </span>
      {label}
    </label>
  );
};

export default Checkbox;
