const initialState = {
  array: null,
  nearest: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "CREATING_MATRIX":
      return {
        ...state,
        array: action.matrix
      };
    case "INCREMENT_CELL":
      return {
        ...state,
        array: action.matrix
      };
    case "ADD_NEW_ROW":
      return {
        ...state,
        array: action.matrix
      };
    case "MATRIX_ROW_DELETE":
      return {
        ...state,
        array: action.matrix
      };
    case "UPDATE_DATA_IN_NEW_ROW":
      return {
        ...state,
        array: action.matrix
      };
    case "MATRIX_DELETE":
      return initialState;
    default:
      return state;
  }
};
