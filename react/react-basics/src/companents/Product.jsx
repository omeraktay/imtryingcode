export default function Product({ productObj }){
    if(!productObj.isActive) return (
      <>
      <p>{productObj.title} is not available.</p>
      <img src={ "/img/" + productObj.image } alt={productObj.title} />
      <p>{ productObj.description }</p>
      <span>$ { productObj.price }</span>
      </>
    );
    return (
    <div className='card shadow' id="cardId">
      <h2 className='text-center'>{ productObj.title }</h2>
      <img className='card-img-top p-2 p-md-3 border-bottom' src={ "/img/" + productObj.image } alt={productObj.title} />
      <div className='card-body'>
        <p className='card-text'>{ productObj.description }</p>
        <span className='badge text-bg-success'>$ { productObj.price }</span>
      </div>
    </div>
  )
  }