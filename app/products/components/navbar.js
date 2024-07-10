import "../styles/navbar.css";
import Cart from "@/app/components/cart";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  return (
    <div>
      <nav role="navigation-1" className="container-space-between hide-768">
        <p>Products</p>
        <div className=" container-space-between gap-[1.25rem] ">
          <button className="button-rounded">Best sellers</button>
          <button className="button-rounded">Featured</button>
          <button className="button-rounded">Care magic</button>
        </div>
      </nav>

      <nav
        role="navigation-2"
        className="hide-768-plus container-space-between "
      >
        <button className="icon-large rounded white border-gray">
          <RxHamburgerMenu />
        </button>
        <Cart variant={"large"} />
      </nav>
    </div>
  );
};

export default Navbar;
