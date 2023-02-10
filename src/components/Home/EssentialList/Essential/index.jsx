import './styleEssential.css'
function Essential(props) {
  return(
    <div className="cardEssential">
      <div className="containerImgEssential">
        <img className='imgEssential' src={props.imgEssential}/>
      </div>
      <h3 className="nameEssential">{props.nameEssential}</h3>
      <h3 className="upToOffEssential">UP to {props.upToOff}% OFF</h3>
    </div>
  ); 
}
export default Essential