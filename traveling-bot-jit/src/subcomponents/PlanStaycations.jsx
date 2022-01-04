import react from "react";
import { useState, useRef} from "react";
import Carousel from "react-elastic-carousel";
import "../assets/styles/slider.css";
import "../assets/styles/hover.css";
import {IconContext} from "react-icons";
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md";
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

const PlanStaycations=()=>{
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
    let [opt_option,set_opt_option]=useState(0);

    let staycation_arr=[
  
        [
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247"},
            {img:staycation1,name:"ITC Grand Bharat",price:"14,400"},
            {img:staycation3,name:"The Roseate New Delhi",price:"3,739"},
            {img:Staycation_Redisson_blue,name:"Redisson Blue", price:"7,299"},
            {img:Staycation_Taj_New_Delhi, name:"Taj, New Delhi", price:"20,500"}
        ],
        [
            {img:Staycation_agra, name:"ITC Mughal Agra",price:"16,600"},
            {img:Staycation_Crystal_Sarovar_Premier_Agra, name:"Crystal Sarovar Premier Agra",price:"8,247"},
            {img:Staycation_Double_tree_by_Hilton_Agra, name:"Double tree by Hilton Agra",price:"5,739"},
            
        ],
        [
            {img:Staycation_The_palms_town_gurgaon, name:"The palms town gurgaon",price:"8,400"},
            {img: Staycation_The_taj_gateaway_guragaon ,name:"The taj gateaway guragaon",price:"4,400"},
            {img:Staycation_Thelalitmangar_Gurgaon ,name:"The lalit mangar Gurgaon",price:"11,400"},
        ],
        [
            {img:Staycation_Crystal_Sarovar_Premier_Agra, name:"Crystal Sarovar Premier Neemrana",price:"8,247"},
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247"},
            {img:staycation3,name:"The Roseate Neemarana",price:"3,739"},
        ],
        [
            {img:staycation2,name:"The Westin Sohna Resort And Spa",price:"11,247"},
            {img:staycation1,name:"ITC Grand Bharat",price:"14,400"},
            {img:staycation3,name:"The Roseate New Delhi",price:"3,739"},
        ],

    ];
    
    let myarr=staycation_arr[opt_option];

    return<>
        <div className="w-full h-auto flex flex-col my-16">
            <div className="mx-auto text-3xl font-semibold mb-10"><span className="text-skyBlue mr-2">Plan</span><span className="text-darkBlue">your staycations</span></div>
            <nav class="stroke w-full grid grid-cols-12">
                <ul className="w-full col-span-8 1530px:w-full flex justify-evenly items-center mx-auto mb-10 overflow-hidden" id="#stay">
                  <li className={`${opt_option===0?"text-darkBlue":"text-LightBlack"} font-semibold hover:text-darkBlue cursor-pointer text-lg  inline-block`} onClick={()=>set_opt_option(0)}><a href="#stay">New Delhi</a></li>
                  <li className={`${opt_option===1?"text-darkBlue":"text-LightBlack"} font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(1)}><a href="#stay">Agra</a></li>
                  <li className={`${opt_option===2?"text-darkBlue":"text-LightBlack"} font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(2)}><a href="#stay">Gurgaon</a></li>
                  <li className={`${opt_option===3?"text-darkBlue":"text-LightBlack"} font-semibold hover:text-darkBlue cursor-pointer text-lg inline-block`} onClick={()=>set_opt_option(3)}><a href="#stay">Neemrana</a></li>
                </ul>
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
                    return<div key={i} className="w-96 h-auto object-fill bg-proGray-200 flex flex-col rounded-md">
                        <img src={myarr[i].img} alt="top destinations" className="w-full h-[10rem] object-cover rounded-t-md"/>
                        <div className="h-[6rem] w-full px-2">
                            <div className="w-full h-auto text-darkBlue font-semibold truncate mt-2 font-poppins">{myarr[i].name}</div>
                            <div className="w-full h-auto text-sm text-LightBlack truncate mb-1 font-poppins">{myarr[i].price} accommodations</div>
                            <div className="w-full h-auto flex items-center my-2">
                                <div className="w-1/2 flex justify-start">
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
                                <div className="w-1/2 flex justify-end items-end ml-2"><span className="text-bold text-darkBlue mr-1 flex">
                                    <IconContext.Provider value={{ className:"h-5 w-5 text-darkBlue"}}><BiRupee/></IconContext.Provider>
                                    {myarr[i].price}</span><span className="truncate text-sm text-LightBlack font-poppins">onwards</span>
                                </div>
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
export default PlanStaycations;