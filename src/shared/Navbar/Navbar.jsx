import {TbTruckDelivery} from "react-icons/tb";
import {BiMap} from "react-icons/bi";
import {GiGlassBall} from "react-icons/gi";
import {MdOutlineSort} from "react-icons/md";
import {AiOutlineUser} from "react-icons/ai";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {BsSearch} from "react-icons/bs";
import { Link } from "react-router-dom";
import './styleNavbar.css'
function Navbar() {
  return (
    <div className="navbar">
      
      <div className="navbarHead">
        <p>Welcome to the worldwide Megamart!</p>
        <div className="navbarOfferts">
          <div className="itemOffer">
            <BiMap className="iconCian"/>
            <p>Deliver to 423651</p>
          </div>
          <div className="itemOffer">
            <TbTruckDelivery className="iconCian"/>
            <p>Track your order</p>
          </div>
          <div className="itemOffer">
            <GiGlassBall className="iconCian"/>
            <p>All offers</p>
          </div>
        </div>        
      </div>

      <div className="searchBar">
        <div className="contentMarkLogo">          
            <MdOutlineSort/>
            <Link className="linkNavbar" to={'/'}>
              <h1>MegaMart</h1>
            </Link>
        </div>
        <div className="contentItemsSearchBar">
          <div className="itemSearchBar">
            <BsSearch className="iconCian"/>
            <input className="inputSearch" type="text" value="Search essentials, groceries and more..."/>
          </div>          
          <div className="itemSearchBar">
            <AiOutlineUser className="iconCian"/>
            <h3>Sing Up / Sing In</h3>
          </div>
          <div className="itemSearchBar">
            <AiOutlineShoppingCart className="iconCian"/>
            <h3>Cart</h3>
          </div>
        </div>
      </div> 
           
    </div>
  );
}

export default Navbar;
