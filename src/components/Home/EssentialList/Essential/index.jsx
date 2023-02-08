import './styleEssential.css'
function Essential(props) {
  return(
    <div className="cardEssential">
      <div className="containerImgEssential">
        <img className='imgEssential' src={props.imgEssential}/>
      </div>
      <p className="nameEssential">{props.nameEssential}</p>
      <p className="upToOff">{props.upToOff}</p>
    </div>
  ); 
}
export default Essential