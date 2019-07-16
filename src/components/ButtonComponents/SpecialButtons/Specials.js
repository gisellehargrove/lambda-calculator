import React, { useState } from "react";
import { specials } from '../../../data.js';
import SpecialButton from './SpecialButton.js';


//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialsList, updateList] = useState(specials);
  const specialsButtons = specialsList.map((char) => {
    return <SpecialButton key={char} text={char} />
  });

  return (
    <div className="specials-container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       {specialsButtons}
    </div>
  );
};

export default Specials;
