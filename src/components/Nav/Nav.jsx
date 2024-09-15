import React from "react";

function Nav() {
  return (
    <div>
      <section className="flex items-center justify-around shadow-lg p-3">
        {/* logo  */}
        <div>
        <i class="ri-menu-2-line text-xl"></i>
        </div>
        <div className="mx-auto lg:mx-0">
          <a className="text-2xl  md:text-3xl font-bold"  href="#">
            Smart<span className="text-red-600">Wave</span>
          </a>
        </div>
        {/* middle  */}
        <div className="">
            <ul className="flex space-x-10 items-center hidden lg:flex">
                <li><a className="font-medium hover:font-bold text-xl" href="#"><i class="ri-home-4-fill"></i></a></li>
                <li><a className="font-medium hover:font-bold" href="#">News</a></li>
                <li><a className="font-medium hover:font-bold" href="#">Reviews</a></li>
                <li><a className="font-medium hover:font-bold" href="#">Best</a></li>
                <li><a className="font-medium hover:font-bold" href="#">Accessories</a></li>
                <li><a className="font-medium hover:font-bold" href="#">All Topic</a></li>
                <li><a className="font-medium hover:font-bold" href="#">More</a></li>
            </ul>
        </div>

        {/* last  */}
        <div className="flex items-center space-x-3">

            <div>
            <i class="ri-search-line text-xl"></i>
            </div>

            <div className="hidden lg:flex">
                <button className=" font-medium hover:font-bold">Best daily deals</button>
            </div>

            <div>
            <i class="ri-shopping-cart-line text-xl"></i>
            </div>


        </div>

      </section>
    </div>
  );
}

export default Nav;
