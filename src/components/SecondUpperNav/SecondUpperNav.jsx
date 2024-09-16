import React from "react";

function SecondUpperNav() {
  return (
    <div className="bg-black p-1 flex justify-between px-10">


        <div>
            <p className="text-white">English</p>
        </div>





      <div className="flex gap-2">
        <div className="text-white">
          <button>SignUp</button>
        </div>
        <div className="text-white">
          <button>Login</button>
        </div>
      </div>
    </div>
  );
}

export default SecondUpperNav;
