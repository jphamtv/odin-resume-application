import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ type, label, onClick, className }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
