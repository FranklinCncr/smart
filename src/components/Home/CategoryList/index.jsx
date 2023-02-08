import Category from "./Category";
function CategoryList() {
  return (
    <>
      <h1>Shop From Top Categories</h1>
      <Category image='https://www.freepnglogos.com/uploads/mobile-png/apple-iphone-jet-black-mobile-png-10.png' category='Mobile' />
      <Category image='https://zeevector.com/wp-content/uploads/cosmetics-images-png.png' category='Cosmetics'/>
      <Category image='https://www.pngall.com/wp-content/uploads/1/Electronic.png' category='Electronics'/>
      <Category image='https://www.freepnglogos.com/uploads/furniture-png/furniture-png-transparent-furniture-images-pluspng-33.png' category='Furniture'/>
      <Category image='https://www.pngall.com/wp-content/uploads/2016/04/Watch-PNG-Clipart.png' category='Watches'/>
      <Category image='https://www.freepnglogos.com/uploads/plant-png/house-plant-png-30.png' category='Decor'/>
    </>
  );
}
export default CategoryList
