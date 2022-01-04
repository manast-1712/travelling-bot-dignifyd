import { useState } from "react";
import {IconContext} from "react-icons";
import {MdFlight,MdBeachAccess,MdLocalOffer} from "react-icons/md";
import {IoIosBed} from "react-icons/io";
import {AiFillCar} from "react-icons/ai";
import {FaGlobeAmericas} from "react-icons/fa";
import {Link} from 'react-router-dom';

const Sidebar=()=>{
    const [show,setShow]=useState(false);
    console.log(show);
    return<>
        <div className="h-full 925px:w-[4rem] 1024px:w-[4.3rem] 1132px:w-[4.5rem] w-20 hover:w-52 fixed top-[8rem] left-0 bg-proGray-200 transition-all transform ease-in delay-150 duration-200 px-2 py-4 rounded-tr-md " onMouseOver={()=>setShow(true)} onMouseOut={()=>setShow(false)}>
            <div className="h-full w-full flex flex-col items-center cursor-pointer divide-y divide-gray-400/50 ">
                <Link to="/FlightsHomePage" className={`w-11/12 h-10 mt-5 mb-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <MdFlight />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue  truncate ${show?"flex pl-2":"hidden"}`}>Flights</span>
                </Link>
                <span className={`w-11/12 h-10 my-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <IoIosBed />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue truncate ${show?"flex pl-2":"hidden"}`}>Stays</span>
                </span>
                <span className={`w-11/12 h-10 my-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <AiFillCar />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue truncate  ${show?"block pl-2":"hidden"}`}>Car Rental</span>
                </span>
                <span className={`w-11/12 h-10 my-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <MdBeachAccess />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue overflow-hidden truncate ${show?"flex flex-row pl-2":"hidden"}`}>Flight+Hotel</span>
                </span>
                <span className={`w-11/12 h-10 my-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <FaGlobeAmericas />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue overflow-hidden truncate ${show?"flex flex-row pl-2":"hidden"}`}>Explore</span>
                </span>
                <span className={`w-11/12 h-10 my-1 flex ${show?"justify-start":"justify-center"} items-center overflow-hidden text-proGray-400 group transition-all transform ease-in delay-150 duration-200`}>
                    <IconContext.Provider value={{ className:"text-xl group-hover:text-skyBlue"}}>
                        <MdLocalOffer />
                    </IconContext.Provider>
                    <span className={` group-hover:text-skyBlue overflow-hidden truncate ${show?"flex flex-row pl-2":"hidden"}`}>Deals</span>
                </span>
            </div>
        </div>
    </>
}
export default Sidebar;