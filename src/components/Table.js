import React from "react";
import styles from "./styles.module.css";

const Table = ({ array, calculatedRows, calculatedColumns }) => {
  array && array[array.length - 1].pop();
  return (
    <div className="table__data">
      <table cellSpacing="0" cellPadding="5">
        <tbody>
          {array &&
            array.map((row, idx) => (
              <tr>
                {row.map(item => (
                  <td
                    key={item.id}
                    className={item.data ? styles.data : styles.summary}
                  >
                    {item.data || Number(item)}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
