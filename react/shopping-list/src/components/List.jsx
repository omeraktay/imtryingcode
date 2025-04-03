import Item from './Item.jsx';


export default function List({items, onDeleteItem, onUpdateItem}){
    return(
      <>
      {
      items.length > 0 ? (
            <div className='list'>
            <ul>
              { items.map((item, index) => (<Item item={item} key={index} onDeleteItem={onDeleteItem} onUpdateItem={onUpdateItem}/>)) }
            </ul>
          </div>
          ) : 
          <div className='list'>No items in your cart.</div>
      }
      </>
    )
  }