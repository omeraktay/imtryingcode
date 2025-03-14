import { useState } from 'react';
import { sculptureList } from './data.js';

function App(){
  const [index, setIndex] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  let sculpture = sculptureList[index];
  function handlePreviousClick(){
    if(index > 0){
    setIndex(index - 1)
    }
    else{
      setIndex(sculptureList.length - 1)
    }
  }
  function handleNextClic(){
    if(index < sculptureList.length - 1){
    setIndex(index + 1)
    }
    else{
      setIndex(0);
    }
  }
  function handleShowDetail(){
    setShowDetail(!showDetail);
  }

  return (
    <>
    <button onClick={handlePreviousClick}>Previous</button>
    <button onClick={handleNextClic}>Next</button>
    <h2>{sculpture.name}</h2>
    <h4>{index +1} of {sculptureList.length}</h4>
    <img src={sculpture.url} alt={sculpture.alt} /> <br />
    <button onClick={handleShowDetail}>{showDetail ? "Hide" : "Show"} Details</button>
    {showDetail && <p>{sculpture.description}</p>}
    </>
  )
}

export default App;

