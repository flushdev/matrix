import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import { creatingMatrix } from "../store/actions/createMatrix";

const Button = ({ create, row, column }) => {
  console.log(column, row);
  const handleCreateMatrix = (M, N) => {
    create(M, N);
  };

  return (
    <>
      <button
        className={styles.button}
        onClick={() => handleCreateMatrix(row, column)}
        disabled={!(column && row)}
      >
        +
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  create: (M, N) => dispatch(creatingMatrix(M, N))
});

export default connect(null, mapDispatchToProps)(Button);
