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
        <img src={isChecked ? icons.checked : icons.unchecked} alt="toggle" />
      </label>
    </div>
  );
};
