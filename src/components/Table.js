import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { incrementCell } from "../store/actions/createMatrix";
import {
  findNearestValues,
  addRow,
  addDataInNewRow
} from "../store/actions/createMatrix";
import styles from "./styles.module.css";

const Table = ({ array, increment, nearest, rowAdd, updateRowWithNewData }) => {
  const [matrix, setMatrix] = useState(null);
  const [displayPercent, setDisplayPercent] = useState(false);
  const [rowToPercent, setRowToPercent] = useState(null);
  const [nearestValues, setNearestValues] = useState(null);
  const [rowOver, setRowOver] = useState(null);
  const [newRowValues, setNewRowValues] = useState([]);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setMatrix(array.array);
  }, [array]);

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
  const handleSwitchHoveredRow = row => {
    setRowOver(row);
  };
  const handleAddRowToMatrix = (row, count) => {
    setNewRowValues([...Array(count - 1)].fill(null));
    rowAdd(matrix, row);
    setEditMode(!editMode);
  };
  const handleWriteDataInRow = (col_id, e) => {
    const array = newRowValues;
    array[col_id] = +e.target.value;
    setNewRowValues(array);
  };
  const handleAddDataRowToMatrix = row_id => {
    !newRowValues.includes(null) &&
      updateRowWithNewData(matrix, row_id, newRowValues);
    setNewRowValues(null);
    setEditMode(!editMode);
  };

  return (
    matrix && (
      <div className="table__data">
        <table cellSpacing="0" cellPadding="5">
          <tbody>
            {matrix.map((row, row_id) => (
              <tr onMouseEnter={() => handleSwitchHoveredRow(row_id)}>
                {row[0].value ? (
                  <>
                    <td
                      style={
                        rowOver === row_id
                          ? {
                              visibility: "visible",
                              opacity: ".95",
                              width: "20px"
                            }
                          : null
                      }
                      className={styles.deleteRow}
                      onClick={() =>
                        !editMode && handleAddRowToMatrix(row_id, row.length)
                      }
                    >
                      +
                    </td>
                    <td
                      style={
                        rowOver === row_id
                          ? {
                              visibility: "visible",
                              opacity: ".95",
                              width: "20px"
                            }
                          : null
                      }
                      className={styles.deleteRow}
                    >
                      -
                    </td>
                  </>
                ) : (
                  <>
                    <td className={styles.invisible} />
                    <td className={styles.invisible} />
                  </>
                )}
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
                      <span
                        className={styles.percentRowBlock}
                        style={
                          displayPercent && rowToPercent === row_id
                            ? {
                                height: `${(54 / 100) * item.percent}px`
                              }
                            : {
                                bottom: `calc(100% - ${54 * (row_id + 1)}px)`
                              }
                        }
                      />
                    </td>
                  ) : row[col_id].value === null ? (
                    <>
                      <td className={styles.data}>
                        <input
                          name="newRowInput"
                          type="number"
                          placeholder="0"
                          required={true}
                          onChange={e => handleWriteDataInRow(col_id, e)}
                        />
                      </td>
                      {row.length - 1 === col_id && (
                        <td>
                          <button
                            className={styles.addButton}
                            onClick={() => handleAddDataRowToMatrix(row_id)}
                          >
                            Add
                          </button>
                        </td>
                      )}
                    </>
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
    dispatch(incrementCell(data, row_id, col_id)),
  rowAdd: (matrix, row) => dispatch(addRow(matrix, row)),
  updateRowWithNewData: (matrix, row, newRow) =>
    dispatch(addDataInNewRow(matrix, row, newRow))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
