import {IconContext} from "react-icons";
import {MdEmail} from "react-icons/md";
const Explore_Subscribe=()=>{
    return<>
        <div className="1268px:w-full 1416px:w-11/12 w-8/12 1080px:h-48 h-52 bg-cardGray mx-auto flex justify-between items-center pl-2 pr-4 my-8 rounded-md shadow-ShadowLine">
            <img src="https://js.skyscnr.com/sttc/hotels-website/hotels-website/static/media/GetExclusiveRates.c5f16264.svg" alt="img" className="1080px:h-8/12 1700px:h-10/12 h-full  1700:w-2/12 w-3/12 1080px:object-fill object-cover"/>
            <div className="h-full 1080px:w-5/12 w-4/12 1700px:p-1 px-4 flex flex-col justify-center">
                <div className="font-bold text-darkBlue">Members access great rates and savings</div>
                <div className="text-sm 1550px:text-[0.8rem] mt-2">Sign up for access to personalised recommendations and Private Deals.</div>
            </div>
            <div className="h-auto 1080px:w-5/12 1700px:w-6/12 w-5/12  1080px:flex-col flex flex-col justify-between items-center">
                <div className="h-8 1080px:w-full  w-9/12 text-[#C8C8C8] flex shadow-Inputprime border-b-2 border-skyBlue">
                    <IconContext.Provider value={{ className:"h-full  w-2/12 text-[#C8C8C8] bg-white "}}>
                        <MdEmail />
                    </IconContext.Provider>
                    <input type="email" className="h-full 1080px:w-full w-10/12 pl-2 outline-none 1550px:text-sm bg-white " placeholder="Enter your email address"/>
                </div>
                <button className="px-4 py-2 mt-3 text-white bg-skyBlue flex justify-center items-center rounded-md 1550px:text-sm">
                    Lets's do this
                </button>
            </div>
        </div>
    </>
}
export default Explore_Subscribe;