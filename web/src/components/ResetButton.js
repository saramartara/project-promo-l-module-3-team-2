import React from "react";
import "../stylesheets/layout/_card.scss";

function ResetButton(props) {
  const handleClick = () => {
    props.handleReset();
  };
  return (
    <button className="card__reset " type="reset" onClick={handleClick}>
      <i className="far fa-trash-alt"></i> Reset
    </button>
  );
}

export default ResetButton;
