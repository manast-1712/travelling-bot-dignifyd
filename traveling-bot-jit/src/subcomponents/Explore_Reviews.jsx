import { useState } from "react";
import Review1 from "../assets/images/Review1.jpg";
import Review2 from "../assets/images/Review2.jpg";
import Review4 from "../assets/images/Review4.jpg";
import Review5 from "../assets/images/Review5.jpg";
import Review6 from "../assets/images/Review6.jpg";
import Review8 from "../assets/images/Review8.jpg";
import Review9 from "../assets/images/Review9.jpg";
import Review10 from "../assets/images/Review10.jpg";
import Review11 from "../assets/images/Review11.jpg";
import {IconContext} from "react-icons";
import {IoIosArrowRoundDown,IoIosArrowRoundUp} from "react-icons/io";

const Explore_Reviews=()=>{

    let totalReviews=12;
    let [currCount,setcurrCount]=useState(6);
    console.log(currCount);
    
    let arr=[
        {name:"Michael ",img:Review1,rev:`"Our experience was truely memorable and hastle free. All thanks to Traveling-bot :) "`},
        {name:"kewal",img:Review2,rev:`"We booked Hotel Eucalyptus through Traveling-bot after reading a handful of reviews, and it was easily the best decision we made for our trip to Santorini."`},
        {name:"Joyce ",img:Review8,rev:`"Started with stress, ended with joy. Thanks Traveling-bot."`},
        {name:"Richael ",img:Review4,rev:`"Where to start? All the places, the people, and the food made this trip memorable and special. While hard to choose, we finished our trip in the Serengeti, which is out of this world."`},
        {name:"Shikha ",img:Review5,rev:`"Definitely a 5! I'd give them more stars if there were more.Traveling-bot is just amazing."`},
        {name:"Lisa",img:Review6,rev:`"This was our first trip out of the US since the pandemic started and it could not have been a more perfect re-entry to travel abroad. Thank you traveling-bot !!`},
        {name:"Rakesh ",img:Review2,rev:`"We had an AMAZING trip!..thanks you soo much"`},
        {name:"Joyce",img:Review8,rev:`"We had such an amazing experience that exceeded our expectations!"`},
        {name:"Shiolli",img:Review9,rev:`"Our trip to Iceland was fantastic and extremely well-rounded. We were traveling with two adults and two teenagers"`},
        {name:"Aditi",img:Review10,rev:`"Thank you traveling-bot ! Once again you have provided me with an incredible trip that has created lifelong memories "`},
        {name:"Rose ",img:Review11,rev:"We found traveling-bot online and used them to plan our family vacation to Costa Rica. We travelled from June 12 to 24th as a group of eight people, four adults and four children..really it was a great experience"},
        {name:"Jackson",img:Review1,rev:`"This travel company delivered exactly what was promised. All recommendations from our agent were spot on, and communications were excellent, instant and helpful. This was a trip of a lifetime. `},
    ];
        return<>
            <div className="w-full h-auto flex flex-col mt-16">
                <div className="mx-auto text-3xl font-semibold mb-10 text-darkBlue"><span className="text-skyBlue mr-1">Feedback</span><span className="text-darkBlue">from travelers</span></div>
                <div className="w-full h-auto grid grid-cols-12 gap-2">
                    {
                        arr.map((v,i)=>{
                            return<div key={i} className={` ${i < currCount ? "flex flex-col":"hidden"} justify-between 1132px:col-span-6 col-span-4 1400px:h-44 1450px:h-48 h-52 rounded-sm relative shadow-Inputprime p-4 bg-proGray-200 rounded-md`}>
                                <div className="h-16 w-full flex justify-between items-center">
                                        <img src={arr[i].img} alt="rimg" className="h-10 w-12 object-cover rounded-full"/>
                                        <div className="h-full w-full flex flex-col justify-center items-start ml-2">
                                            <div className="text-darkBlue font-bold">{arr[i].name}</div>
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
                                                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="w-4 text-yellow-500 mr-1" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                                    <path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                                                  </svg>
                                                </li>
                                            </ul>
                                            </div>
                                        </div>
                                </div>
                                <div className="h-36 w-full text-[0.9rem] text-LightBlack  text-justify mt-4 overflow-hidden pb-1">
                                    {arr[i].rev}
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <button className="px-4 py-2 bg-skyBlue text-white flex justify-center items-center rounded-md mx-auto mt-4 mb-10" onClick={()=>{
                                    console.log("click");
                                    totalReviews!==currCount?setcurrCount(currCount+3):(totalReviews===currCount)?setcurrCount(currCount-3):setcurrCount(currCount+3);
                                }}> {totalReviews===currCount? "Show less":"Show More"}
                                    <IconContext.Provider value={{ className:"h-6 w-6 text-white"}}>
                                    {totalReviews===currCount? <IoIosArrowRoundUp />:<IoIosArrowRoundDown />}
                                    </IconContext.Provider>  
                            </button>
        </>
    }
    export default Explore_Reviews;