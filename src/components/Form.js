import React, { useState } from "react";
import Button from "./Button";
import Table from "./Table";
import styles from "./styles.module.css";

const Form = () => {
  const [column, setColumn] = useState(null);
  const [row, setRow] = useState(null);
  const [nearestAmount, setNearestAmount] = useState(null);
  const [empty, setEmpty] = useState(true);

  const handleChangeRows = e => {
    setRow(+e.target.value);
  };
  const handleChangeColumn = e => {
    setColumn(+e.target.value);
  };
  const handleChangeNearestAmount = e => {
    setNearestAmount(+e.target.value);
  };
  const handleButtonDisplay = () => {
    setEmpty(!empty);
  };

  console.log(empty);

  return (
    <>
      <h4>Generate new Matrix</h4>
      <div className={styles.inputContainer}>
        {empty && (
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
        )}
        <Button
          row={row}
          column={column}
          handleButtonDisplay={handleButtonDisplay}
          empty={empty}
        />
      </div>

      <Table nearest={nearestAmount} />
    </>
  );
};

export default Form;
