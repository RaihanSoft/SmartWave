import React from "react";

function Nav() {
  return (
    <div>
      <section className="flex items-center justify-around shadow-lg p-3">
        {/* logo  */}
        <div>
          <a className="text-3xl font-bold"  href="#">
            Smart<span className="text-red-600">Wave</span>
          </a>
        </div>
        {/* middle  */}
        <div className="">
            <ul className="flex space-x-10 items-center ">
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
        <div className="flex items-center space-x-10">

            <div>
            <i class="ri-search-line text-xl"></i>
            </div>

            <div className="">
                <button className=" font-medium hover:font-bold">Best daily deals <i class="ri-shopping-cart-line text-xl"></i></button>
            </div>


        </div>

      </section>
    </div>
  );
}

export default Nav;
