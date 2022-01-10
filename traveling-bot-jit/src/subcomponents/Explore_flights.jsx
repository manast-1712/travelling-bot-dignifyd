import react from "react";
import {useRef} from "react";
import Carousel from "react-elastic-carousel";
import "../assets/styles/slider.css";
import "../assets/styles/hover.css";
import {IconContext} from "react-icons";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
import {BiRupee} from "react-icons/bi";
import ExploreFlight_Dubai from "../assets/images/ExploreFlight_Dubai.svg";
import ExploreFlight_Male from "../assets/images/ExploreFlight_Male.svg";
import ExploreFlight_NW from "../assets/images/ExploreFlight_NW.svg";
import ExploreFlight_Australia from "../assets/images/ExploreFlight_Australia.jpg";
import ExploreFlight_SouthKorea from "../assets/images/ExploreFlight_SouthKorea.jpg";

const Explore_flights=()=>{
    const breakPoints = [
        { width: 1, itemsToShow: 1 ,pagination:false},
        { width: 550, itemsToShow: 2, itemsToScroll: 1,pagination:false },
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
    let arr=[{
        img:ExploreFlight_Male,
        name:"Male",
        flightname:"indigo",
        flightImg:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5de6d15987437.56299f400a9ef.png",
        price:"18,629"
    },{
        img:ExploreFlight_Dubai,
        name:"Dubai",
        flightname:"Vistara",
        flightImg:"https://airhex.com/images/airline-logos/vistara.png",
        price:"25,565"
    },{
        img:ExploreFlight_NW,
        name:"New York",
        flightname:"Air India",
        flightImg:"https://www.justfly.com/images/suppliersx2/AIx2.png",
        price:"Rs. 25,565"
    },
    {
        img:ExploreFlight_SouthKorea,
        name:"South Korea",
        flightname:"indigo",
        flightImg:"https://mir-s3-cdn-cf.behance.net/project_modules/disp/c5de6d15987437.56299f400a9ef.png",
        price:"Rs. 43,629"
    },
    {
        img:ExploreFlight_Australia,
        name:"Australia",
        flightname:"Air India",
        flightImg:"https://www.justfly.com/images/suppliersx2/AIx2.png",
        price:"Rs. 51,709"
    }
    ];
    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue ">Best flight</span><span className="text-darkBlue"> deals from New Delhi</span></div>
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
                    return<div key={i} className="h-full w-full object-fill flex flex-col shadow-prime1 bg-backGray my-2 rounded-md">
                        <img src={arr[i].img} alt="top destinations" className="w-full h-[14rem] object-cover rounded-t-md"/>
                        <div className="h-[10.4rem] w-full rounded-b-md p-2">
                            <div className="w-full text-darkBlue font-bold text-xl mb-2">{arr[i].name}</div>
                            <div className="w-full h-[6rem] grid grid-cols-6 gap-2 pr-2">
                                <img alt="img" src={arr[i].flightImg} className="col-span-1 h-8 w-8 mx-auto object-cover"/>
                                <div className="col-span-3 flex flex-col"><span className="text-[1rem] text-[#171717] font-semibold">Tue, 18 Jan</span><span className="text-[0.7rem] ">Delhi-{arr[i].name}</span></div>
                                <div className="col-span-2 text-0.7rem font-poppins flex justify-end items-start">{arr[i].flightname}</div>
                                <img alt="img" src={arr[i].flightImg} className="col-span-1  h-8 w-8 mx-auto object-cover"/>
                                <div className="col-span-3 flex flex-col"><span className="text-[1rem] text-[#171717]  font-semibold">Tue, 18 Jan</span><span className="text-[0.7rem] ">Delhi-{arr[i].name}</span></div>
                                <div className="col-span-2 text-0.7rem font-poppins flex justify-end items-start">{arr[i].flightname}</div>
                            </div>
                            <div className="w-full h-5 flex justify-end items-end mb-3 pl-2">
                                <span className="text-sm text-[#a8a8a8] font-semibold mr-1">starting from</span>
                                <span className="font-extrabold text-darkBlue flex font-bold text-lg justify-end items-center">
                                    <IconContext.Provider value={{ className:"h-5 w-5 text-darkBlue"}}><BiRupee/></IconContext.Provider>
                                    {arr[i].price}
                                </span>
                            </div>
                        </div>
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
export default Explore_flights;