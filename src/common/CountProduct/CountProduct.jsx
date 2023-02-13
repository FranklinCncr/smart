import "./styleCountProduct.css";
import { IoMdAddCircle } from "react-icons/io";
import {HiMinusCircle} from "react-icons/hi";
function CountProduct() {
  return (
    <div className="containerCount">
      <IoMdAddCircle />
      <p>1</p>
      <HiMinusCircle />
    </div>
  );
}
export default CountProduct;
