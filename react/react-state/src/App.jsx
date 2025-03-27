import { useState } from 'react';
import { sculptureList } from './data.js';


function App() {
  const [index, setIndex] = useState(0)
  const sculpture = sculptureList[index];
  const [showDetails, setShowDetails] = useState(true);

  function handlePreviousClick(){
    if(index > 0){
      setIndex(index - 1)
    }
    else{
      setIndex(sculptureList.length - 1);
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
  function handleShowDetails(){
    setShowDetails(!showDetails);
  }

  return(
    <>
      <button onClick={handlePreviousClick}>Previous</button>
      <button onClick={handleNextClick}>Next</button>
      <h1>{sculpture.name}</h1>
      <h4>{index + 1} of {sculptureList.length}</h4>
      <img src={sculpture.url} alt={sculpture.alt} /> <br />
      <button onClick={handleShowDetails}> {showDetails ? "Hide" : "Show"} Details</button>
      {showDetails && <p>{sculpture.description}</p>}
    </>
  )
}

export default App;