import Smartphone from "./Smartphone";
import "./styleSmartphoneList.css";
function SmartphoneList() {
  return (
    <>
      <h1 className="fullTextSmartphone">
        Grab the best deal on{" "}
        <span className="textSmartphone">Smartphones</span>
      </h1>
      <div className="gridLayoutSmartphone">
        <Smartphone
          image="https://www.freepnglogos.com/uploads/smartphone-png/asus-smartphone-mobile-png-6.png"
          name="Galaxy S22 Ultra"
          priceNew={32999}
          priceLast={74999}
          off="56"
        />
        <Smartphone
          image="https://www.pngplay.com/wp-content/uploads/12/Smartphone-PNG-Free-File-Download.png"
          name="Galaxy S22 Ultra"
          priceNew={32999}
          priceLast={74999}
          off="56"
        />
        <Smartphone
          image="https://pngimg.com/d/smartphone_PNG8518.png"
          name="Galaxy S22 Ultra"
          priceNew={32999}
          priceLast={74999}
          off="56"
        />
        <Smartphone
          image="https://t-mobile.scene7.com/is/image/Tmusprod/Samsung_Galaxy-S23-gold-phone-2?ts=1675103558810&fmt=png-alpha&dpr=off"
          name="Galaxy S22 Ultra"
          priceNew={32999}
          priceLast={74999}
          off="56"
        />
        <Smartphone
          image="https://motorolaroe.vtexassets.com/arquivos/ids/156472/03vb1815230_Athena_ORTHO_Black_FRONT.png?v=637599390301030000"
          name="Galaxy S22 Ultra"
          priceNew={32999}
          priceLast={74999}
          off="56"
        />
      </div>
    </>
  );
}
export default SmartphoneList;
