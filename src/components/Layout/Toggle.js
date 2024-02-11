import '../css/Toggle.css';

export const Toggle = ({ handleChange, isChecked, icons }) => {
  return (
    <div className="toggle-container">
      <input
        type="checkbox"
        id="check"
        className="toggle"
        onChange={handleChange}
        checked={isChecked}
      />
      <label htmlFor="check">
        {isChecked ? icons.checked : icons.unchecked}
      </label>
    </div>
  );
};
