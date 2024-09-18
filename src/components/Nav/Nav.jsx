import React from "react";
import './Nav.css'

function Nav() {
  return (
    <div>
      <section className="flex items-center justify-between xl:px-10 md:shadow-lg shadow-lg py-3 px-2">
        {/* logo  */}
        

        <i class="ri-menu-2-line text-xl lg:hidden"></i>


        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl  md:text-3xl font-bold"  href="#">
            Smart<span className="text-red-600">Wave</span>
          </h2>
        </div>

        {/* middle  */}
        <div className="">
            <ul className="flex space-x-24   hidden lg:flex">
                <li><a className="font-medium hover:font-bold text-xl" href="#"><i class="ri-home-4-fill"></i></a></li>
                <li><a className="font-medium " href="#">News</a></li>
                <li><a className="font-medium" href="#">Reviews</a></li>
                <li><a className="font-medium" href="#">Best</a></li>
                <li><a className="font-medium -ml-6" href="#">Accessories</a></li>
                <li><a className="font-medium" href="#">All Topic</a></li>
                <li><a className="font-medium" href="#">More</a></li>
            </ul>
        </div>

        {/* last  */}
        <div className="flex items-center space-x-3">

            <div>
            <i class="ri-search-line text-xl"></i>
            </div>

            <div className="hidden xl:flex">
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
