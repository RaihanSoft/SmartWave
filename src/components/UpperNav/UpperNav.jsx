import React from "react";

function UpperNav() {
  return (
    <div>
      <section>
        <div className="text-center font-medium  text-white p-1 bg-gradient-to-r from-gray-500 via-red-400 to-blue-400 flex  justify-between ">

          <div className="">
            <marquee className='hidden lg:flex' behavior="top" direction="right">
              <p>he Latest in Smartphone Tech: Top Picks for 2024</p>
            </marquee>
          </div>

          <div>
            {/* <marquee behavior="top" direction="none"> */}
              <p className="hover:font-bold">Latest in Smartphone Tech: Top Picks </p>
            {/* </marquee> */}
          </div>
          <div className="">
            <marquee className='hidden lg:flex' behavior="top" direction="left">
              <p>he Latest in Smartphone Tech: Top Picks for 2024</p>
            </marquee>
          </div>


        </div>
      </section>
    </div>
  );
}

export default UpperNav;
