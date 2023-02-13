import './styleSlideCarousel.css';
function SlideCarousel(props) {
    return(
      <div className={props.color}>
        <div className='detailsSlide'>
          <h2 className='descriptionSlide'>{props.description}</h2>
          <h1 className='nameSlide'>{props.name}</h1>              
          <p className='offSlide'>UP to {props.offSlide}% OFF</p>
        </div>
        <div className='containerImgSlide'>
          <div className="circleSlide"></div>
          <img className='imgSlide' src={props.imgSlide} alt="alt"/>        
        </div>
      </div>
    ); 
  }
  export default SlideCarousel