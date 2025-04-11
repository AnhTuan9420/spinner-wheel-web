import React from "react";
import PropTypes from "prop-types";

const ErrorMessage = ({ message }) => {
  return (
    <span
      style={{
        width: "100%",
        display: "block",
        marginTop: "0.3rem",
        fontSize: "80%",
        color: "#f86c6b",
        textAlign: "left",
        fontSize: '12px'
      }}
    >
      {message}
    </span>
  );
};
ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired,
};
export default ErrorMessage;
