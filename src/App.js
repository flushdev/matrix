import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { creatingMatrix } from "./store/actions/createMatrix";

import Table from "./components/Table";
import Form from "./components/Form";

function App({ array }) {
  const [matrix, setMatrix] = useState(array);

  useEffect(() => {
    setMatrix(array);
  }, [array]);

  console.log(matrix);

  return (
    <div className="App">
      <Form />
      {matrix.array && <Table matrix={matrix.array} />}
    </div>
  );
}

const mapStateToProps = state => ({
  array: state.matrix
});

const mapDispatchToProps = dispatch => ({
  created: (M, N) => dispatch(creatingMatrix(M, N))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
