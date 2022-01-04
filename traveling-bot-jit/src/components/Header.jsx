import traveling_bot_logo from "../assets/images/traveling_bot_logo.svg";
import Dropdown from "../subcomponents/Dropdown.jsx";
import {UserCircleIcon} from "@heroicons/react/solid";
import {HeartIcon} from "@heroicons/react/outline";
const Header=()=>{
    return<>
        <div className="h-24 w-full flex justify-between items-center shadow-prime1 sticky top-0 left-0 right-0 bg-white z-50">
            <img src={traveling_bot_logo} alt="Logo" className="w-auto h-20"/>
            <div className="w-56 1024px:w-52 h-full flex justify-evenly items-center">
                <HeartIcon className="h-8 1024px:h-6 w-8 text-darkBlue"/>
                <UserCircleIcon className="h-12 1024px:h-10 w-12 text-darkBlue"/>
                <Dropdown/>
            </div>
        </div> 
    </>
}
export default Header;