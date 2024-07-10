import "../styles/product_card.css";
import { FaArrowRight } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";
import Cart from "./cart";

const Card = () => {
  return <div></div>;
};

const Product_card = ({ src, name, price, category, qty }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={src} alt="product" />
        <div className="buy-container container-space-between">
          <button className="buy-button container-space-between">
            <span>Buy now</span>
            <div className="icon-very-small white rounded">
              <FaArrowRight />
            </div>
          </button>
          <p className="price black container-space-between">{price}</p>
        </div>
        <div className="cart-button-position">
          <Cart variant="small" className="border-0" />
        </div>
      </div>
      <div className="product-card-description container-space-between">
        <div>
          <p>{name}</p>
          <p>{category}</p>
        </div>
        <p className="underline uppercase">{qty}</p>
      </div>
    </div>
  );
};

export default Product_card;
