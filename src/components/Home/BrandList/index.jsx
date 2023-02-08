import Brand from './Brand';
function BrandList() {
  return (
    <>
      <h1>Top Electronics Brands</h1>
      <Brand nameBrand='IPHONE' imgLogo='https://1000marcas.net/wp-content/uploads/2019/11/Apple-Logo.jpg' offBrand={80} imgBrand='https://png.monster/wp-content/uploads/2022/09/png.monster-209.png' color='grey'/>
      <Brand nameBrand='REALME' imgLogo='https://i2.wp.com/zeevector.com/wp-content/uploads/Realme-Logo-HD.png?fit=1177%2C351&ssl=1' offBrand={80} imgBrand='https://www.pngall.com/wp-content/uploads/4/Realme-PNG.png' color='yellow'/>
      <Brand nameBrand='XIAOMI' imgLogo='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/512px-Xiaomi_logo_%282021-%29.svg.png' offBrand={80} imgBrand='https://cdn.pixabay.com/photo/2020/03/09/08/44/redmi-note-8-4914994_960_720.png' color='red'/>
    </>
  );
}
export default BrandList