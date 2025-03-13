import { items } from "../data";
import Product from './Product'

export default function ProductList(){
    
    return (
      <>
    {
      items.length > 0 ? (
    <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4' id='product-list'>
      {
        items.map((item, index) => ( 
          <div className='col'>
          <Product key={ index } productObj={ item }/>
          </div>
        ))
      }
      </div>
      ) : (
        <p>There is no product</p>
      )
    }
    </>
  )
  }