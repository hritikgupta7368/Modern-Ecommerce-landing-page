import "./card.css";
import { FaArrowRight } from "react-icons/fa6";
import { FiShoppingBag } from "react-icons/fi";

const Card = ({ src, name, price, category, qty }) => {
  return (
    <div className="product-card">
      <div className="img-container">
        <img src={src} alt="product" />
        <div className="buy-container">
          <button className="buy-button">
            <span>Buy now</span>
            <div className="icon white-icon icon-custom-buy">
              <FaArrowRight />
            </div>
          </button>
          <p className="price">{price}</p>
        </div>
        <button className="cart-button icon white-icon">
          <FiShoppingBag />
        </button>
      </div>
      <div className="product-card-description">
        <div>
          <p>{name}</p>
          <p>{category}</p>
        </div>
        <p>{qty}</p>
      </div>
    </div>
  );
};

export default Card;
