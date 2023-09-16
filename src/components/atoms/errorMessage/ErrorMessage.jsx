/* eslint-disable react/prop-types */
import "./ErrorMessage.scss";

const ErrorMessage = ({ message }) => {
  return (
    <div className="error__message">
      <span>🚫</span> {message}
    </div>
  );
};

export default ErrorMessage;
