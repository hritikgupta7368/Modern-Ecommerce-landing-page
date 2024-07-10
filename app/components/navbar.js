import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import Cart from "./cart";
import Link from "next/link";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="z-10">
      <nav role="navigation-1" className="container-space-between hide-768">
        <Link href="/">
          <div className="icon-large rounded black border-black">
            <RxHamburgerMenu />
          </div>
        </Link>
        <div>
          <button className="icon-large rounded white border-gray">
            <CiSearch />
          </button>
          <button className="icon-large rounded white border-gray ml-3">
            <RxHamburgerMenu />
          </button>
        </div>
        <div className="container-space-between gap-[1.25rem] ">
          <button className="icon-large rounded red border-red">
            <CiHeart size={19} color="red" />
          </button>
          <Cart variant={"small"} />
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
