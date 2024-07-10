import { FaArrowRight } from "react-icons/fa6";
import "../styles/buttons.css";
import Link from "next/link";

const Hero_button = ({ size }) => {
  return (
    <Link
      href={"/products"}
      className={`hero-button container-space-between  rounded black border-black  ${size} `}
      style={{
        size: `var(--variant , ${size})`,
      }}
    >
      <div />
      <span>Start Shopping</span>
      <div className="icon-small rounded white">
        <FaArrowRight />
      </div>
    </Link>
  );
};

export default Hero_button;
