import { useState } from 'react'
import './index.css'
import { data } from './data.js';
import Header from './companents/Header.jsx';
import Form from './companents/Form.jsx';
import List from './companents/List.jsx';
import Summary from './companents/Summary.jsx';

function App(){
  const [items, setItems] = useState(data);
  function handleAddItem(item){
    setItems((items) => [...items, item]);
  }

  function handleDeteItem(id){
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleUpdateItem(id){
    setItems(items => items.map(item => item.id == id ? {...item, completed: !item.completed} : item))
  }

  function handleClearList(){
    const approval = window.confirm("Your list will be deleted. Do you want to continue");
    if(approval){
      setItems([]);
    }
  }

  return(
    <div className='app'>
      <Header />
      <Form onAddItem={handleAddItem} onClearList={handleClearList}/>
      <List items={items} onDeleteItem={handleDeteItem} onUpdateItem={handleUpdateItem}/>
      <Summary items={items}/>
    </div>
  )
}

export default App;