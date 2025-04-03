export default function Summary({items}){
    if(items.length === 0){
      return(
        <footer className='summary'>
          <p>You can start making your list.</p>
        </footer>
      )
    }
    const itemsCount = items.length;
    const completedItemsCount = items.filter(item => item.completed).length;
  
    return(
      <footer className='summary'>
        {
          itemsCount === completedItemsCount ? 
          <p>You have completed your shopping ✅</p> : 
          <p>You have {itemsCount} items in your cart. {completedItemsCount} has been completed.</p>
        }
        </footer>
    )
  }