import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block ">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="#">
            ALL PRODUCTS
          </Link>
          <Link className="navbar__link relative" href="#">
            BAGS
          </Link>
          <Link className="navbar__link relative" href="#">
            HATS
          </Link>
          <Link className="navbar__link relative" href="#">
            FOOTWEARS
          </Link>
          <Link className="navbar__link relative" href="#">
            DECORATIONS
          </Link>
          <Link className="navbar__link relative" href="#">
            OTHERS
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
