import React from "react";

const Table = ({ matrix }) => {
  return (
    <table
      border="1"
      bordercolor="#8b967d"
      cellSpacing="0"
      cellPadding="5"
      height="80px"
    >
      <tbody>
        {matrix[0].map(row => console.log(row))}
        {/* <tr>
          <td style={{ fontSize: "12px" }}>345</td>
          <td style={{ backgrounColor: "#ffffcc" }}>666</td>
          <td>777</td>
        </tr>
        <tr>
          <td>999</td>
          <td>111</td>
          <td>523</td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Table;
