import React, { useState, useEffect } from "react";
import Button from "./Button";

const Form = ({ create }) => {
  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [nearestAmount, setNearestAmount] = useState(null);

  const handleChangeRows = e => {
    setRow(+e.target.value);
  };
  const handleChangeColumn = e => {
    setColumn(+e.target.value);
  };
  const handleChangeNearestAmount = e => {
    setNearestAmount(+e.target.value);
  };

  return (
    <>
      <form>
        <input
          name="row"
          placeholder="Rows"
          type="text"
          onChange={handleChangeRows}
        ></input>
        <input
          name="columns"
          placeholder="Columns"
          type="text"
          onChange={handleChangeColumn}
        ></input>
        <input
          name="nearest"
          placeholder="Show nearest"
          type="text"
          onChange={handleChangeNearestAmount}
        ></input>
      </form>
      {<Button row={row} column={column} />}
    </>
  );
};

export default Form;
