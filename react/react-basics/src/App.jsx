import Header from './companents/Header';
import ProductList from './companents/ProductList';

export default function App(){
    return (
      <>
      <Header />
      <div className='container mt-3'>
      <ProductList />
      {/* <Footer /> */}
      </div>
      </>
    )
  }