import { useState } from "react";
import { sculptureList } from "./data.js";


function App(){
  const [index, setIndex] = useState(0);
  const sculpture = sculptureList[index];
  let [showDetails, setShowDetails] = useState(true);

  function handlePreviousClick(){
    if(index > 0){
    setIndex(index - 1);
    }
    else{
      setIndex(sculptureList.length - 1)
    }
  }
  function handleNextClick(){
    if(index < sculptureList.length - 1){
    setIndex(index + 1);
    }
    else{
      setIndex(0)
    }
  }
  function handleDetails(){
    setShowDetails(!showDetails);
  }

  return(
    <>
    <button onClick={handlePreviousClick}>Previous</button>
    <button onClick={handleNextClick}>Next</button>
    <h2>{ sculpture.name }</h2>
    <h4>{index + 1} of {sculptureList.length}</h4>
    <img src={sculpture.url} alt={sculpture.alt} /> <br />
    <button onClick={handleDetails}>{showDetails ? "Hide" : "Show"} Details</button>
    {showDetails && <p>{sculpture.description}</p>}
    </>
  )
}

export default App;