import React from "react";
import { connect } from "react-redux";
import styles from "./styles.module.css";

import { creatingMatrix, matrixDelete } from "../store/actions/createMatrix";

const Button = ({
  create,
  deleteMatrix,
  row,
  column,
  handleButtonDisplay,
  empty
}) => {
  const handleCreateMatrix = (M, N) => {
    create(M, N);
  };

  return empty ? (
    <button
      onClick={() => {
        handleCreateMatrix(row, column);
        handleButtonDisplay();
      }}
      disabled={!(column && row)}
    >
      Generate!
    </button>
  ) : (
    <>
      <button
        className={styles.buttonDelete}
        onClick={() => {
          deleteMatrix();
          handleButtonDisplay();
        }}
      >
        Delete Matrix
      </button>
      <button
        className={styles.buttonDelete}
        onClick={() => handleCreateMatrix(row, column)}
      >
        Reload Matrix
      </button>
    </>
  );
};

const mapDispatchToProps = dispatch => ({
  create: (M, N) => dispatch(creatingMatrix(M, N)),
  deleteMatrix: () => dispatch(matrixDelete())
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
