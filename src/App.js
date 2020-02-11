import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";

import { creatingMatrix } from "./store/actions/createMatrix";

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
    </div>
  );
}

const mapStateToProps = state => ({
  array: state.matrix
});

export default connect(mapStateToProps)(App);
