import React from "react";
import {useRef} from "react";
import Carousel from 'react-elastic-carousel';
import {IconContext} from "react-icons";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import "../assets/styles/slider.css";

const TopDest_India=()=>{
    const breakPoints = [
        { width: 1, itemsToShow: 4,pagination:false},
        { width: 450, itemsToShow: 3, itemsToScroll: 1 ,pagination:false},
        { width: 550, itemsToShow: 4, itemsToScroll: 2 ,pagination:false},
        { width: 670, itemsToShow: 5,pagination:false },
        { width: 868, itemsToShow: 6,pagination:false },
        { width: 1200, itemsToShow: 6,pagination:false }
      ];

      const carousel = useRef(null);

    let arr=["https://pix6.agoda.net/geo/city/11304/1_11304_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/16850/1_16850_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/8801/1_8801_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/8845/1_8845_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/16854/1_16854_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/3667/1_3667_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/6241/1_6241_02.jpg?s=345x345&ar=1x1","https://pix6.agoda.net/geo/city/21075/1_21075_02.jpg?s=345x345&ar=1x1"];
    let arr2=[{tittle:"Goa",rec:"7,601"},{tittle:"Mumbai",rec:"3,574"},{tittle:"Hyderabad",rec:"1,251"},{tittle:"Jaipur",rec:"2,601"},{tittle:"Pune",rec:"2,051"},{tittle:"Udaipur",rec:"1,425"},{tittle:"Kolkata",rec:"2,581"},{tittle:"Lonavala",rec:"1,222"}]

      function next() {
        carousel.current.slideNext();
      }
      function prev() {
        carousel.current.slidePrev();
      }
    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue mr-2">Top</span><span className="text-darkBlue">destinations in India</span></div>
            <div className="Slider">
          <div className="carousel-wrapper flex justify-center items-center overflow-hidden">
          <button onClick={prev}>
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <MdKeyboardArrowLeft />
              </IconContext.Provider>
          </button>
            <Carousel breakPoints={breakPoints} autoPlaySpeed={2000} ref={carousel} itemPadding={[0, 5]} >
              {
                arr.map((v,i)=>{
                    return<div key={i} className="w-80 h-auto rounded-md flex flex-col py-2 mx-4 font-poppins">
                        <div className="w-36 1330px:w-32 h-36 1330px:h-32 rounded-full mx-auto mb-2 transform hover:scale-102 transition duration-300 ease-in-out overflow-hidden">
                          <img src={arr[i]} alt="top destinations" className="h-full w-full object-fill hover:brightness-[0.7] transition-all transform ease-in duration-300  hover:scale-103" />
                        </div>
                        <div className="w-full text-center text-darkBlue font-semibold truncate">{arr2[i].tittle}</div>
                        <div className="mx-auto w-10/12 text-sm text-LightBlack text-center truncate px-2">{arr2[i].rec} accommodations</div>
                    </div>
                })
              }
            </Carousel>
            <button onClick={next}>
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <MdKeyboardArrowRight />
              </IconContext.Provider>
            </button>
          </div>
        </div>
        </div>
    </>
}
export default TopDest_India;