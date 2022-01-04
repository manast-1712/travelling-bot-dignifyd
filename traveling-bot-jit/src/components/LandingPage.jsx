// import bg4 from "../assets/images/bg4.jpg";
import HomeMap from "../assets/images/HomeMap.png";
import {FaSearch} from "react-icons/fa";
import {IconContext} from "react-icons";
import {RiHotelFill} from "react-icons/ri";
import {MdPlace} from "react-icons/md";

import BG_VIDEO from "../assets/videos/BG_VIDEO.mp4";

const LandingPage=()=>{
    return<>
        <div className="975px:h-[30rem] 1296px:h-[40rem] 1550px:h-[45rem] h-[50rem] w-full relative rounded-md -z-10">
            <video autoPlay muted loop className="h-full w-full object-cover">
                <source src={BG_VIDEO} typpe="video/mp4"/>
            </video>
            <div className="925px:h-[18rem] 975px:h-[20rem] 1132px:h-[23rem] 1296px:h-[25rem]  1390px:h-[26.5rem] h-[28rem] 1296px:w-8/12 w-7/12 mx-auto centerdiv flex justify-between bg-[#ffffff36] 925px:p-2 1024px:px-[3rem] px-[5rem]  1024px:py-2 py-4">
                <div className="w-8/12 h-full flex flex-col ">
                    <div className="1132px:text-4xl text-5xl font-bold 1132px:my-2 mt-4 my-2"><span className="text-skyBlue">Where</span> <span className="text-darkBlue">are you<br/> planning to go ?</span></div>
                    <div className="925px:h-10 1132px:h-11 h-12 w-11/12 bg-white 975px:my-2 my-4 rounded-3xl flex justify-center items-center pl-2 overflow-hidden shadow-Inputprime hover:shadow-cardShadow">
                        <input className="h-full 925px:w-10/12 w-11/12 outline-none border-none pl-2  925px:text-[0.8rem] 1132px-[0.85rem]" placeholder="Destination and hotel name "/>
                        <div className="h-full w-2/12 text-[1rem] text-white bg-skyBlue group hover:bg-darkBlue flex justify-center items-center">
                        <IconContext.Provider value={{ className:"h-full 1132px:text-lg text-xl text-white bg-skyBlue group-hover:bg-darkBlue"}}>
                            <FaSearch />
                        </IconContext.Provider>
                        </div>
                    </div>
                    <div className="text-darkBlue 925px:pl-2 pl-4 925px:text-[0.7rem] 1132px-[0.85rem]">or browse highlights</div>
                    <div className=" h-auto 1390px:w-11/12 1530px:w-10/12 w-9/12 flex flex-wrap my-2 cursor-pointer">
                        <span className="flex items-center bg-[#ffffff38] border-2 border-proGray-300 925px:px-1 1230px:px-2 1132px:px-3 px-4 925px:py-1 py-2 925px:mx-0.5 1132px:mx-1 mx-2 975px:my-0.5 my-2 1230px:text-[0.9rem] 975px:text-[0.75rem]">
                        <IconContext.Provider value={{ className:"h-full text-xl text-white mr-2 1132px:mr-1"}}>
                            <RiHotelFill />
                        </IconContext.Provider>
                        Hotel Rooms
                        </span>
                        <span className="flex items-center bg-[#ffffff38] border-2 border-proGray-300 925px:px-1 1230px:px-2 1132px:px-3 px-4 925px:py-1 py-2 1132px:mx-1 mx-2 975px:my-0.5 my-2 1230px:text-[0.9rem] 975px:text-[0.75rem]">
                        <IconContext.Provider value={{ className:"h-full text-xl text-white mr-2"}}>
                            <MdPlace />
                        </IconContext.Provider>
                        Private Villas
                        </span>
                        <span className="flex  items-center bg-[#ffffff38] border-2 border-proGray-300 925px:px-1 1230px:px-2 1132px:px-3 px-4 925px:py-1 py-2 1132px:mx-1 mx-2 975px:my-0.5 my-2 1230px:text-[0.9rem] 975px:text-[0.75rem]">
                        <IconContext.Provider value={{ className:"h-full text-xl text-white mr-2"}}>
                            <RiHotelFill />
                        </IconContext.Provider>
                        Resorts
                        </span>
                        <span className="flex  items-center bg-[#ffffff38] border-2 border-proGray-300 925px:px-1 1230px:px-2 1132px:px-3 px-4 925px:py-1 py-2 1132px:mx-1 mx-2 975px:my-0.5 my-2 1230px:text-[0.9rem] 975px:text-[0.75rem]">
                        <IconContext.Provider value={{ className:"h-full text-xl text-white mr-2"}}>
                            <RiHotelFill />
                        </IconContext.Provider>
                        Bungalows
                        </span>
                    </div>
                </div>
                <img src={HomeMap} alt="map" className="h-full w-4/12 object-cover rounded-md"/>
            </div>
        </div> 
    </>
}
export default LandingPage;