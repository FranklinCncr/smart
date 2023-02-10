import Essential from "./Essential";
import "./styleEssentialList.css";
function EssentialList() {
  return (
    <>
      <h1 className="fullTextEssential">
        Daily <span className="textEssential">Essential</span>
      </h1>
      <div className="gridLayoutEssential">
        <Essential
          imgEssential="https://www.pngkey.com/png/full/853-8530678_each-year-the-consumer-price-index-basket-of.png"
          nameEssential="Daily Essential"
          upToOff={50}
        />
        <Essential
          imgEssential="https://www.freepnglogos.com/uploads/vegetables-png/fruit-and-vegetables-basket-png-20.png"
          nameEssential="Vegitables"
          upToOff={50}
        />
        <Essential
          imgEssential="https://www.freepnglogos.com/uploads/fruits-png/ways-for-kids-eat-their-fruits-and-vegetables-13.png"
          nameEssential="Fruits"
          upToOff={50}
        />
        <Essential
          imgEssential="https://i.pinimg.com/originals/09/73/d7/0973d7e2c655d60f8aaef22812df22ae.png"
          nameEssential="Strowberry"
          upToOff={50}
        />
        <Essential
          imgEssential="https://www.freepnglogos.com/uploads/mango-png/mango-diy-skin-care-hacks-for-mangoes-mangoes-for-your-skin-2.png"
          nameEssential="Mango"
          upToOff={50}
        />
        <Essential
          imgEssential="https://www.pngmart.com/files/1/Cherry-Vector-PNG-File.png"
          nameEssential="Cherry"
          upToOff={50}
        />
      </div>
    </>
  );
}
export default EssentialList;
