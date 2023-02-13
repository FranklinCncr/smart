import './styleCategory.css'
function Category(props) {
  return(
    <div className='cardCategory'>
      <div className='containerImage'>
        <img className='imgCategory' src={props.image} alt={props.id} />
      </div>
      <div className='containerName'>
        <h2 className='category'>{props.category}</h2>
      </div>
    </div>
  );
}
export default Category