import Carousel from "react-elastic-carousel";
import {useRef} from "react";
import "../assets/styles/slider.css";
import "../assets/styles/hover.css";
import {IconContext} from "react-icons";
import {BiRupee} from "react-icons/bi";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";


import ExploreVariety_Hostels from "../assets/images/ExploreVariety_Hostels.svg";
import ExploreVariety_HotelRoom from "../assets/images/ExploreVariety_HotelRoom.svg";
import ExploreVariety_Resort from "../assets/images/ExploreVariety_Resort.svg";


const PlanStaycations=()=>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 ,pagination:false},
        { width: 600, itemsToShow: 2, itemsToScroll: 1,pagination:false },
        { width: 768, itemsToShow: 3,pagination:false },
        { width: 1200, itemsToShow: 3,pagination:false }
      ];

    const carousel = useRef(null);

      function next() {
        carousel.current.slideNext();
      }
      function prev() {
        carousel.current.slidePrev();
      }

    let arr=[{title:"Hotel Rooms",price:"Rs.999",img:ExploreVariety_HotelRoom},{title:"Hostel Rooms",price:"Rs.499",img:ExploreVariety_Hostels},{title:"Resorts",price:"Rs.2,499",img:ExploreVariety_Resort}];

    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue mr-1">Explore</span><span className="text-darkBlue"> a variety of stays</span></div>
            <div className="Slider">
          <div className="carousel-wrapper flex justify-center items-center overflow-hidden">
          <button onClick={prev} className="1401px:hidden">
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <MdKeyboardArrowLeft />
              </IconContext.Provider>
          </button>
            <Carousel breakPoints={breakPoints} autoPlaySpeed={2000} ref={carousel} itemPadding={[0, 5]} >
              {
                arr.map((v,i)=>{
                    return<div key={i} className="w-96 h-auto object-fill bg-proGray-200 flex flex-col rounded-sm">
                        <img src={arr[i].img} alt="top destinations" className="w-full h-[14rem] object-cover rounded-t-sm"/>
                        <div className="h-[3rem] w-full px-2">
                            <div className="w-full h-auto flex items-center my-2 px-2">
                                <div className="w-1/2 flex truncate pr-2 justify-start items-end text-darkBlue font-bold">{arr[i].title}</div>
                                <div className="w-1/2 flex justify-end items-end"><span className="text-bold text-darkBlue mr-1 flex">
                                    <IconContext.Provider value={{ className:"h-5 w-5 text-darkBlue"}}><BiRupee/></IconContext.Provider>
                                    {arr[i].price}</span><span className="truncate text-sm text-LightBlack font-poppins">onwards</span>
                                </div>
                            </div>
                        </div>
                    </div>
                })
              }
            </Carousel>
            <button onClick={next} className="1401px:hidden">
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <MdKeyboardArrowRight />
              </IconContext.Provider>
            </button>
          </div>
        </div>
        </div>
    </>
}
export default PlanStaycations;