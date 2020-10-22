import React from "react";

export default function ErrorDisplay(props) {
  return (
    <div id="error_message">{`Error code: ${props.status}, ${props.message}`}</div>
  );
}
