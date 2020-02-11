import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { incrementCell } from "../store/actions/createMatrix";
import { findNearestValues } from "../store/actions/createMatrix";
import styles from "./styles.module.css";

const Table = ({ array, increment, nearest }) => {
  const [matrix, setMatrix] = useState(null);
  const [displayPercent, setDisplayPercent] = useState(false);
  const [rowToPercent, setRowToPercent] = useState(null);
  const [nearestValues, setNearestValues] = useState(null);

  const handleUpdate = (array, row_id, col_id) => {
    increment(array, row_id, col_id);
  };
  const handleChangeDisplayData = row => {
    setDisplayPercent(!displayPercent);
    setRowToPercent(row);
  };
  const handleCleanDisplayPercentage = () => {
    setDisplayPercent(!displayPercent);
    setRowToPercent(null);
  };
  const handleDisplayNearestData = value => {
    setNearestValues(findNearestValues(matrix, nearest, value));
  };
  const handleCleanNearestData = () => {
    setNearestValues(null);
  };

  useEffect(() => {
    setMatrix(array.array);
  }, [array]);

  return (
    matrix && (
      <div className="table__data">
        <table cellSpacing="0" cellPadding="5">
          <tbody>
            {matrix.map((row, row_id) => (
              <tr>
                {row.map((item, col_id) =>
                  row[col_id].value ? (
                    <td
                      className={
                        displayPercent && rowToPercent === row_id
                          ? styles.percents
                          : nearestValues &&
                            nearestValues.find(
                              val => val.value === row[col_id].value
                            )
                          ? styles.tdLighten
                          : styles.data
                      }
                      onClick={() => handleUpdate(matrix, row_id, col_id)}
                      onMouseOver={() => handleDisplayNearestData(item.value)}
                      onMouseOut={handleCleanNearestData}
                    >
                      {displayPercent && rowToPercent === row_id
                        ? `${item.percent}%`
                        : item.value}
                    </td>
                  ) : item === row[row.length - 1] &&
                    !isNaN(row[row.length - 1]) ? (
                    <td
                      className={styles.summary}
                      onMouseOver={() => handleChangeDisplayData(row_id)}
                      onMouseOut={() => handleCleanDisplayPercentage()}
                    >
                      {item}
                    </td>
                  ) : (
                    !isNaN(item) && <td className={styles.summary}>{item}</td>
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  );
};

const mapStateToProps = state => ({
  array: state.matrix
});

const mapDispatchToProps = dispatch => ({
  increment: (data, row_id, col_id) =>
    dispatch(incrementCell(data, row_id, col_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
