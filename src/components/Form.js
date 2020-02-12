import React, { useState } from "react";
import Button from "./Button";
import Table from "./Table";
import styles from "./styles.module.css";

const Form = () => {
  const [row, setRow] = useState(4);
  const [column, setColumn] = useState(9);
  const [nearestAmount, setNearestAmount] = useState(3);
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

  return (
    <>
      <h4>Generate new Matrix</h4>
      <div className={styles.inputContainer}>
        {empty && (
          <form>
            <input
              name="row"
              placeholder="Rows [default 4]"
              type="number"
              autoComplete="off"
              onChange={handleChangeRows}
            />
            <input
              name="columns"
              placeholder="Columns [default 9]"
              type="number"
              autoComplete="off"
              onChange={handleChangeColumn}
            />
            <input
              name="nearest"
              placeholder="Nearest [default 3]"
              type="number"
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
      {!empty && (
        <>
          <input
            name="nearestAfter"
            placeholder="Show nearest"
            type="number"
            autoComplete="off"
            value={nearestAmount}
            onChange={handleChangeNearestAmount}
          />
          <h4 className={styles.inputTitle}>Nearest amount</h4>
        </>
      )}

      <Table nearest={nearestAmount} />
    </>
  );
};

export default Form;
