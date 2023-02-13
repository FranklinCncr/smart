import './styleBrand.css'
function Brand(props) {
  return(
    <div className={props.color}>
      <div className='detailsBrand'>
        <div className='containerNameBrand'>
          <p>{props.nameBrand}</p>
        </div>
        <div className='containerLogo'>
          <img className='imgLogo' src={props.imgLogo} alt={props.id}/>
        </div>        
        <p className='upToOff'>UP to {props.offBrand}% OFF</p>
      </div>
      <div className='containerImgBrand'>
        <div className="circle"></div>
        <img className='imgBrand' src={props.imgBrand} alt={props.id}/>        
      </div>
    </div>
  ); 
}
export default Brand