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
          autoComplete="off"
          onChange={handleChangeRows}
        />
        <input
          name="columns"
          placeholder="Columns"
          type="text"
          autoComplete="off"
          onChange={handleChangeColumn}
        />
        <input
          name="nearest"
          placeholder="Show nearest"
          type="text"
          autoComplete="off"
          onChange={handleChangeNearestAmount}
        />
      </form>
      {<Button row={row} column={column} />}
    </>
  );
};

export default Form;
