import ExploreDeals from "../subcomponents/Explore_Deals";
import PlanStaycations from "../subcomponents/PlanStaycations";
import TopDest_India from "../subcomponents/TopDest_India";
import TopDest_OutsideIndia from "../subcomponents/TopDest_OutsideIndia";
import Explore_flights from "../subcomponents/Explore_flights";
import Explore_VarietyStays from "../subcomponents/Explore_VarietyStays.jsx";
import Explore_Reviews from "../subcomponents/Explore_Reviews";
import Explore_Subscribe from "../subcomponents/Explore_Subscribe";

const Explore=()=>{
    return<>
    <div className="grid grid-cols-72 h-auto">
        <div className="col-start-15 col-end-62 h-auto">
            {/* <div className="w-full h-auto flex justify-evenly items-center mt-8 mc-12">
                <img className="object-cover" src={"https://media.consumeraffairs.com/files/cache/logos/bookingcom_logo_6125_widget_logo.png"} alt="logos"/>
                <img className="h-14 w-28 object-cover" src={"https://www.asiamiles.com/content/dam/am-content/brand-v2/travel-pillar/logo-image/Hotels.com/hotels_logo_31012018.png"} alt="logos"/>
                <img className="h-10 w-24 object-fill" src={"https://cdn6.agoda.net/images/kite-js/logo/agoda/color-default.svg"} alt="logos"/>
                <img className="h-12 w-20 object-cover" src={"https://i.pinimg.com/originals/08/f8/05/08f8053cb49d4c3acf2a91699eef4cd4.png"} alt="logos"/>
                <img className="h-12 w-28 object-fill" src={"https://th.bing.com/th/id/R.d36a34ba985e27f68d2dc73ce74da714?rik=gb0mJjsXSeGyyg&riu=http%3a%2f%2fcdn4.hotelopia.com%2ffreya%2fimg%2flogo.png&ehk=BurHPz1yj9i%2bo81sTlKpWPcUPZ6XY0oNDHtQCd6iEeA%3d&risl=&pid=ImgRaw&r=0"} alt="logos"/>
            </div> */}
            <ExploreDeals/>
            <TopDest_India/>
            <PlanStaycations/>
            <Explore_flights/>
            <Explore_VarietyStays/>
            <TopDest_OutsideIndia/>
            <Explore_Reviews/>
            <Explore_Subscribe/>
        </div>
    </div>
    </>
}
export default Explore;