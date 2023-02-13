import {BsWhatsapp} from 'react-icons/bs'
import {BsTelephoneFill} from 'react-icons/bs'
import './styleFooter.css'
function Footer() {
    return (
      <div className="footer">
        
        <div className="contentContact">
          <h1>MegaMart</h1>
          <h3>Contact Us</h3>
          <div className="itemContact">            
            <BsWhatsapp className='iconFooter'/>
            <div>
              <p>Whats App</p>
              <p>+1 202-918-2132</p>
            </div>
          </div>
          <div className="itemContact">            
            <BsTelephoneFill className='iconFooter'/>
            <div>
              <p>Whats App</p>
              <p>+1 202-918-2132</p>
            </div>
          </div>
        </div>

        <div className='popularCategories'>
          <h3 className='titleColumnFooter'>Most Popular Categories</h3>
          <p>Staples</p>
          <p>Beverages</p>
          <p>Personal Care</p>
          <p>Home Care</p>
          <p>Baby Care</p>
          <p>Vegetables & Fruit</p>
          <p>Snack & Foods</p>
        </div>

        <div className='customServices'>
          <h3 className='titleColumnFooter'>Custom Services</h3>
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>E-waste Policy</p>
          <p>Cancellation & Return Policy</p>
        </div>
      </div>
    );
  }
  
  export default Footer;