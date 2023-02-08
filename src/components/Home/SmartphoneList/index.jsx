import Smartphone from './Smartphone';
function SmartphoneList() {
  return (
    <>
      <h1>Grab the best deal on Smartphones</h1>
      <Smartphone image='https://www.freepnglogos.com/uploads/smartphone-png/asus-smartphone-mobile-png-6.png' name='Galaxy S22 Ultra' priceNew={32999} priceLast={74999} off='56'/>
      <Smartphone image='https://www.pngplay.com/wp-content/uploads/12/Smartphone-PNG-Free-File-Download.png' name='Galaxy S22 Ultra' priceNew={32999} priceLast={74999} off='56'/>
      <Smartphone image='https://pngimg.com/d/smartphone_PNG8518.png' name='Galaxy S22 Ultra' priceNew={32999} priceLast={74999} off='56'/>
    </>
  );
}
export default SmartphoneList
