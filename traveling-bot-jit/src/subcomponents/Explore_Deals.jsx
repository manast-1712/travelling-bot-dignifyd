import React from "react";
import {useRef} from "react";
import Carousel from 'react-elastic-carousel';
import "../assets/styles/slider.css";
import {IconContext} from "react-icons";
import {IoIosArrowDropleftCircle,IoIosArrowDroprightCircle} from "react-icons/io";
import Explore_Deal1  from "../assets/images/Explore_Deal1.png";
import Explore_Deal2  from "../assets/images/Explore_Deal2.png";
import Explore_Deal3  from "../assets/images/Explore_Deal3.png";
import Explore_Deal4  from "../assets/images/Explore_Deal4.png";
import Explore_Deal5  from "../assets/images/Explore_Deal5.png";
import Explore_Deal6  from "../assets/images/Explore_Deal6.png";
import Explore_Deal7  from "../assets/images/Explore_Deal7.png";
import Explore_Deal8  from "../assets/images/Explore_Deal8.png";
import Explore_Deal9  from "../assets/images/Explore_Deal9.png";
import Explore_Deal10  from "../assets/images/Explore_Deal10.png";

const Explore_Deals=()=>{
    // const breakPoints = [
    //     { width: 1, itemsToShow: 2,pagination:false},
    //     { width: 550, itemsToShow: 1, itemsToScroll: 1,pagination:false,itemPadding:[0,2],outerSpacing:0},
    //     // { width: 768, itemsToShow: 2,pagination:false },
    //     { width: 668, itemsToShow: 3,pagination:false,itemPadding:[0,4] },
    //   ];
const breakPoints = [
  { width: 1, itemsToShow: 1 ,pagination: false,itemPadding:[0,4] },
  { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false,itemPadding:[0,4] },
  { width: 850, itemsToShow: 3 ,itemPadding:[0,8],pagination: false},
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 ,itemPadding:[0,3],pagination: false},
  { width: 1450, itemsToShow: 5 ,itemPadding:[0,4],pagination: false},
  { width: 1750, itemsToShow: 6 ,itemPadding:[0,4],pagination: false},

      ];
      const carousel = useRef(null);

      let arr=[Explore_Deal1,Explore_Deal2,Explore_Deal3,Explore_Deal4,Explore_Deal5,Explore_Deal6,Explore_Deal7,Explore_Deal8,Explore_Deal9,Explore_Deal10];

      function next() {
        carousel.current.slideNext();
      }
      function prev() {
        carousel.current.slidePrev();
      }
    return<>
       <div className="Slider my-20">
          <div className="carousel-wrapper flex justify-center items-center overflow-hidden ">
          <button onClick={prev}><span class="material-icons-outlined">
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <IoIosArrowDropleftCircle />
              </IconContext.Provider>
            </span></button>
            <Carousel breakPoints={breakPoints} autoPlaySpeed={2000} ref={carousel}>
              {
                arr.map((v,i)=>{
                    return<img key={i} alt="deals" src={arr[i]} className="w-full h-48 object-fill rounded-md"/>
                })
              }
            </Carousel>
            <button onClick={next}><span class="material-icons-outlined">
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <IoIosArrowDroprightCircle/>
              </IconContext.Provider>
            </span></button>
          </div>
        </div>
    </>
}
export default Explore_Deals;