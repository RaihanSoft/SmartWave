function Header() {
  return (
    <div className="w-11/12 mx-auto flex flex-col items-center xl:flex-row gap-4 mt-5">
      <div className="carousel w-full xl:w-2/3">
        <div id="item1" className="carousel-item w-full">
          <img src="./assets\Popup-banner-3995.webp" className="w-full" />
        </div>

        <div id="item2" className="carousel-item w-full">
          <img src="./assets\Web-Slider-1332.webp" className="w-full" />
        </div>

        <div id="item3" className="carousel-item w-full">
          <img src="./assets\Popup-banner-3995.webp" className="w-full" />
        </div>

        <div id="item4" className="carousel-item w-full">
          <img src="./assets\Web-Slider-1332.webp" className="w-full" />
        </div>
      </div>

      {/* side header  */}

      <div className="xl:space-y-4 md:flex xl:flex-col gap-4 xl:gap-0 space-y-4 sm:space-y-0">
        
        <div className="xl:h-[235px] xl:w-[460px]">
          <img className="h-full w-full" src=".\assets\Top-Banner-(1)-5483.webp" alt="" />
        </div>

        <div className="xl:h-[235px] xl:w-[460px]">
          <img className="h-full w-full" src=".\assets\Top-Banner-2306.webp" alt="" />
        </div>

      </div>



    </div>
  );
}

export default Header;
