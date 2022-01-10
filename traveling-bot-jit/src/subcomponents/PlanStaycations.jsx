import react from "react";
import { useState, useRef, useEffect} from "react";
import Carousel from "react-elastic-carousel";
import "../assets/styles/slider.css";
import "../assets/styles/hover.css";
import {IconContext} from "react-icons";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight,MdLocationPin} from "react-icons/md";
import {HiOutlineArrowNarrowRight} from "react-icons/hi";
import {BiRupee} from "react-icons/bi";

import staycation1 from "../assets/images/staycation1.svg";
import staycation2 from "../assets/images/staycation2.svg";
import staycation3 from "../assets/images/staycation3.svg";
import Staycation_Redisson_blue from "../assets/images/Staycation_Redisson_blue.jpg"
import Staycation_Taj_New_Delhi from "../assets/images/Staycation_Taj_New_Delhi.jpg"
import Staycation_Crystal_Sarovar_Premier_Agra from "../assets/images/Staycation_Crystal_Sarovar_Premier_Agra.PNG";
import Staycation_Double_tree_by_Hilton_Agra from "../assets/images/Staycation_Double_tree_by_Hilton_Agra.jpg";
import Staycation_agra from "../assets/images/Staycation_agra.jfif";
import Staycation_The_palms_town_gurgaon from "../assets/images/Staycation_The_palms_town_gurgaon.jfif";
import Staycation_The_taj_gateaway_guragaon from "../assets/images/Staycation_The_taj_gateaway_guragaon.jpeg";
import Staycation_Thelalitmangar_Gurgaon from "../assets/images/Staycation_Thelalitmangar_Gurgaon.jpeg";


//our functional component
const PlanStaycations=()=>{
  const [location, setLocation] = useState({
    loaded: false,
    coordinates: {lat:"",lng:""},
  });

  const onSuccess = location => {
    setLocation({
      loaded: true,
      coordinates: {
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      },
    });
  };

  const onError = (error) => {
    setLocation({
      loaded: true,
      error,
    })
  }
  //hook will render only once
  useEffect(() => {
    console.log("Inside Render Hook");
    if(!("geolocation" in navigator)){
      onError({
          code: 0,
          message: "Geolocation not supported",
        });
    }
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    // console.log(lat,lng);
  },[])
  
    const breakPoints = [
        { width: 1, itemsToShow: 1 ,pagination:false},
        { width: 550, itemsToShow: 2, itemsToScroll: 1,pagination:false },
        { width: 768, itemsToShow: 3,pagination:false },
        { width: 1200, itemsToShow: 3,pagination:false }  
      ];

      const breakPoints2 = [
        { width: 1, itemsToShow: 3 ,pagination:false},
        { width: 550, itemsToShow: 4, itemsToScroll: 1,pagination:false },
        { width: 768, itemsToShow: 4,pagination:false },
        { width: 1200, itemsToShow: 4,pagination:false }  
      ];

    const carousel = useRef(null);
      
    function next() {
        carousel.current.slideNext();
      }
    function prev() {
        carousel.current.slidePrev();
      }

      //use state returns array with two values
      // first is value i.e. state object and second is function i.e updated function.
      // so this sets initial value of opt_function as 0.
    let [opt_option,set_opt_option]=useState(0);

    let staycation_arr=[
      //before this information retrieve the closest 5 destinations to users location.
      //write code for retrieving hotel information for 5 nearest destinations and store them in array of json objects.
      //key value pair
      //key neabry destination value -> hotels
  
        [
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247",loc:"Road no 4 near mahipalpur, New Delhi, 110037, India"},
            {img:staycation1,name:"ITC Grand Bharat",price:"14,400",loc:"Hasanpur Tauru, Mewat District, Gurugram, Haryana 122105"},
            {img:staycation3,name:"The Roseate New Delhi",price:"3,739",loc:"15/16 Ram Dwara Main Bazar Pahar Ganj, New Delhi, 110011, India"},
            {img:Staycation_Redisson_blue,name:"Redisson Blue", price:"7,299",loc:"Metro Station Complex, Sector 21, New Delhi, 110075, India"},
            {img:Staycation_Taj_New_Delhi, name:"Taj, New Delhi", price:"20,500",loc:"2 Sardar Patel Marg Diplomatic Enclave , New Delhi , 110021"}
        ],
        [
            {img:Staycation_agra, name:"ITC Mughal Agra",price:"16,600",loc:"Taj Ganj, Agra, Uttar Pradesh 282001"},
            {img:Staycation_Crystal_Sarovar_Premier_Agra, name:"Crystal Sarovar Premier Agra",price:"8,247",loc:"Fatehabad Road, Agra, Uttar Pradesh 282001"},
            {img:Staycation_Double_tree_by_Hilton_Agra, name:"Double tree by Hilton Agra",price:"5,739",loc:"B/H - 1&2, Taj Nagri Phase II, Agra, Uttar Pradesh, India, Agra, Uttar Pradesh 282001"},
            
        ],
        [
            {img:Staycation_The_palms_town_gurgaon, name:"The palms town gurgaon",price:"8,400",loc:"B - Block Sushant Lok, Gurugram (Gurgaon) 122001 India"},
            {img: Staycation_The_taj_gateaway_guragaon ,name:"The taj gateaway guragaon",price:"4,400",loc:"PO Damdama, Off Sohna-Gurgaon Rd, Gurugram (Gurgaon), Haryana 122102 ·"},
            {img:Staycation_Thelalitmangar_Gurgaon ,name:"The lalit mangar Gurgaon",price:"11,400",loc:"Camp Wild Road, Near Mangar Police, Near Mangar Police Chowki, Faridabad, Haryana 121001 ·"},
        ],
        [
            {img:Staycation_Crystal_Sarovar_Premier_Agra, name:"Crystal Sarovar Premier Neemrana",price:"8,247"},
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247",loc:"Fatehabad Road, Agra, Uttar Pradesh 282001"},
            {img:staycation3,name:"The Roseate Neemarana",price:"3,739",loc:"Samalka, NH-8, D Block, New Delhi, Delhi 11003"},
        ],
        [
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247",loc:"Road no 4 near mahipalpur, New Delhi, 110037, India"},
            {img:staycation1,name:"ITC Grand Bharat",price:"14,400",loc:"Hasanpur Tauru, Mewat District, Gurugram, Haryana 122105"},
            {img:staycation3,name:"The Roseate New Delhi",price:"3,739",loca:"B/H - 1&2, Taj Nagri Phase II, Agra, Uttar Pradesh, India, Ag"},
        ],

    ];
    
    let myarr=staycation_arr[opt_option];
    // console.log.log(staycation_arr[1]);
    console.log("hi",opt_option);
    console.log(myarr);

    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue mr-2">Plan</span><span className="text-darkBlue">your staycations</span></div>
            {/* <nav class="stroke w-full grid grid-cols-12">
                <ul className="w-full col-span-8 1530px:w-full flex justify-evenly items-center mx-auto mb-10 overflow-hidden" id="#stay">
                  <li className={`${opt_option===0?"text-darkBlue bg-proGray-200":"text-LightBlack bg-white"} rounded-sm font-semibold hover:text-darkBlue cursor-pointer text-lg  inline-block`} onClick={()=>set_opt_option(0)}><a href="#stay">New Delhi</a></li>
                  <li className={`${opt_option===1?"text-darkBlue bg-proGray-200":"text-LightBlack bg-white"} rounded-sm font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(1)}><a href="#stay">Agra</a></li>
                  <li className={`${opt_option===2?"text-darkBlue bg-proGray-200":"text-LightBlack bg-white"} rounded-sm font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(2)}><a href="#stay">Gurgaon</a></li>
                  <li className={`${opt_option===3?"text-darkBlue bg-proGray-200":"text-LightBlack bg-white"} rounded-sm font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(3)}><a href="#stay">Neemrana</a></li>
                </ul>
                <div className={`${opt_option===4?"text-darkBlue":"text-divghtBlack"} group flex justify-evenly items-center mx-auto mb-10 col-span-4 font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(4)}>
                      <a className="flex justify-center items-center" href="#stay">view more hotels
                      <IconContext.Provider value={{ className:"ml-2 h-8 w-8 text-[#C8C8C8] group-hover:text-darkBlue"}}><HiOutlineArrowNarrowRight /></IconContext.Provider></a>
                 </div>
            </nav> */}
            <nav class="stroke w-full grid grid-cols-12">
                  <div className="w-11/12 col-span-8 1530px:w-full flex justify-evenly items-center mx-auto mb-10 overflow-hidden" id="#stay">
                    <Carousel breakPoints={breakPoints2} autoPlaySpeed={2000} ref={carousel} itemPadding={[0, 5]}>
                         <div className="h-full w-auto text-white">
                          <li className={`${opt_option===0?"text-darkBlue border-b-2 border-darkBlue":"text-LightBlack bg-white"} h-12 w-full font-semibold hover:text-darkBlue cursor-pointer text-lg  inline-block flex justify-center items-center`} onClick={()=>set_opt_option(0)}><a href="#stay">New Delhi</a></li>
                         </div>
                         <div className="h-full w-auto text-white">
                         <li className={`${opt_option===1?"text-darkBlue border-b-2 border-darkBlue":"text-LightBlack bg-white"} h-12 w-full font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block flex justify-center items-center`} onClick={()=>set_opt_option(1)}><a href="#stay">Agra</a></li>
                         </div>
                         <div className="h-full w-auto text-white">
                         <li className={`${opt_option===2?"text-darkBlue border-b-2 border-darkBlue":"text-LightBlack bg-white"} h-12 w-full font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block flex justify-center items-center`} onClick={()=>set_opt_option(2)}><a href="#stay">Gurgaon</a></li>
                         </div>
                         <div className="h-full w-auto text-white">
                          <li className={`${opt_option===3?"text-darkBlue border-b-2 border-darkBlue":"text-LightBlack bg-white"} h-12 w-full font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block flex justify-center items-center`} onClick={()=>set_opt_option(3)}><a href="#stay">Neemrana</a></li>
                         </div>
                         {/* <div className="h-full w-full bg-yellow-300 text-white">5</div> */}
                    </Carousel>
                  </div>
                  <div className={`${opt_option===4?"text-darkBlue":"text-divghtBlack"} group flex justify-evenly items-center mx-auto mb-10 col-span-4 font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(4)}>
                      <a className="flex justify-center items-center" href="#stay">view more hotels
                      <IconContext.Provider value={{ className:"ml-2 h-8 w-8 text-[#C8C8C8] group-hover:text-darkBlue"}}><HiOutlineArrowNarrowRight /></IconContext.Provider></a>
                 </div>
            </nav>
            <div className="Slider">
          <div className="carousel-wrapper flex justify-center items-center overflow-hidden">
          <button onClick={prev}>
              <IconContext.Provider value={{ className:"h-10 w-10 text-[#C8C8C8]"}}>
                <MdKeyboardArrowLeft />
              </IconContext.Provider>
          </button>
            <Carousel breakPoints={breakPoints} autoPlaySpeed={2000} ref={carousel} itemPadding={[0, 5]} >
              {
                myarr.map((v,i)=>{
                    return<div key={i} className="w-full h-auto object-fill bg-backGray flex flex-col rounded-md shadow-prime1 my-2 relative">
                        <img src={myarr[i].img} alt="top destinations" className="w-full h-[13rem] object-cover rounded-t-md"/>
                        <div className="h-[7rem] w-full px-2 flex flex-col justify-evenly items-start">
                            <div className="w-full h-auto text-darkBlue font-semibold text-xl truncate font-poppins mt-2">{myarr[i].name}</div>
                            <div className="w-10/12 h-5 text-sm text-LightBlack truncate font-poppins flex justify-start items-end ">
                              <span className="h-5 w-5 flex justify-start items-center">
                                <IconContext.Provider value={{ className:"h-3 w-3"}}>
                                  <MdLocationPin />
                                </IconContext.Provider>
                              </span>
                              <span className="truncate">{myarr[i].loc}</span>
                            </div>
                            <div className="w-full h-auto flex items-center my-2">
                                <div className="w-1/2 flex justify-start items-center">
                                <ul class="flex justify-center mr-2">
                                    <li>
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                      </svg>
                                    </li>
                                    <li>
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                      </svg>
                                    </li>
                                    <li>
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                      </svg>
                                    </li>
                                    <li>
                                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                      </svg>
                                    </li>
                                    <li>
                                      <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="star" class="w-4 text-yellow-500" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                        <path fill="currentColor" d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
                                      </svg>
                                    </li>
                                </ul>
                                </div>
                                <div className="w-1/2 flex justify-end items-center ml-2"><span className=" text-darkBlue mr-1 flex items-center">
                                    <IconContext.Provider value={{ className:"h-5 w-5 text-darkBlue"}}><BiRupee/></IconContext.Provider>
                                    <span className="font-extrabold text-lg">{myarr[i].price}</span></span><span className="truncate text-sm text-[#a8a8a8] font-semibold">per night</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-auto w-auto px-2 py-1 absolute top-1 px-1 left-0 -ml-2 bg-gradient-to-r from-LightOrange to-DarkOrange hover:bg-DarkOrange text-white flex justify-end items-center ratingClip">4.5 / 5</div>
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
export default PlanStaycations;