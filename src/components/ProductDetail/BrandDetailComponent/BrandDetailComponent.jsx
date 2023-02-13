import './styleBrandDetailComponent.css';
function BrandDetailComponent(props) {
  return(
    <div className={`${props.color}Detail`}>
      <div className='detailsBrandDetail'>
        <div className='containerNameBrandDetail'>
          <p>{props.nameBrand}</p>
        </div>
        <div className='containerLogoDetail'>
          <img className='imgLogoDetail' src={props.imgLogo} alt={props.id}/>
        </div>        
        <p className='upToOffDetail'>UP to {props.offBrand}% OFF</p>
      </div>
      <div className='containerImgBrandDetail'>
        <div className="circleDetail"></div>
        <img className='imgBrandDetail' src={props.imgBrand} alt={props.id}/>        
      </div>
    </div>
  ); 
}
export default BrandDetailComponent