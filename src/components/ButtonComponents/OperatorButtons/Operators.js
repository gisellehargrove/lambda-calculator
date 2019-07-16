import React, { useState } from "react";
import { operators } from '../../../data.js';
import OperatorButton from './OperatorButton.js';

//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const [operatorList, updateOperators] = useState(operators);
  const operatorButtons = operatorList.map((obj) => {
    return <OperatorButton key={obj.char} text={obj.char} update={props.update}/>
  });
  return (
    <div className="operators-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {operatorButtons}
    </div>
  );
};

export default Operators;
