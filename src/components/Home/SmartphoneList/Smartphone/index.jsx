import './styleSmartphone.css'
function Smartphone(props) {
    return (
      <div className='cardSmartphone'>
        <div className='cardImage'>
          <img className='imgStyle' src={props.image}/>
          <div className='off'>{props.off}% OFF</div>
        </div>   
        <div className='cardDetails'>
          <h1 className='name'>{props.name}</h1>
          <p className='prices'>₹{props.priceNew} ₹{props.priceLast}</p>
          <p className='save'>Save - ₹{props.priceLast - props.priceNew}</p>   
        </div>             
      </div>
    );
}
export default Smartphone
