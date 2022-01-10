// import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../subcomponents/Sidebar";
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css'; 
import {useState} from 'react';
import { addDays } from 'date-fns';
import { CustomPopover, CountTravelers} from "../subcomponents/CustomPopover.jsx";
import {ReturnFlightInput,OneWayInput,MultiwayWayInput} from "../subcomponents/Input.jsx";
import flight_discount from "../assets/images/flight_discount.png";
import Explore_flights from "../subcomponents/Explore_flights.jsx";
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid'

const FlightsHomePage=()=>{
    const[type,setType]=useState(0);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate:addDays(new Date(), 1),
          key: 'selection'
        }
      ]);
    return<>
        <Header/>
        <Sidebar/>
        <div className="grid grid-cols-72">
            <div className="col-start-15 col-end-57 bg-proGray-100 rounded-md h-auto mt-10 p-4 relative">
                <div className="text-4xl text-darkBlue font-semibold">Compare and book flights <span className="text-skyBlue">with ease</span></div>
                <div className="text-md text-LightBlack mb-4">Discover your next dream destination</div>
                <div className="mt-6 w-auto h-auto flex justify-between items-center">
                    <div className="w-auto h-auto flex">
                        <div className={`border-2 boder-[#a8a8a8] px-2 py-1 rounded-full cursor-pointer mr-4 ${type===0?"text-darkBlue border-darkBlue":"text-LightBlack"} text-md hover:text-darkBlue hover:border-darkBlue`} onClick={()=>setType(0)}>Return</div>
                        <div className={`border-2 boder-[#a8a8a8] px-2 py-1 rounded-full cursor-pointer mr-4 ${type===1?"text-darkBlue border-darkBlue":"text-LightBlack"} text-md hover:text-darkBlue hover:border-darkBlue`} onClick={()=>setType(1)}>One-way</div>
                        <div className={`border-2 boder-[#a8a8a8] px-2 py-1 rounded-full cursor-pointer mr-4 ${type===2?"text-darkBlue border-darkBlue":"text-LightBlack"} text-md hover:text-darkBlue hover:border-darkBlue`} onClick={()=>setType(2)}>Multi-city</div>
                    </div>
                    <div className="w-auto h-auto flex">
                        <span className="mr-4"><CountTravelers/></span>
                        <CustomPopover arr={['Economy','Premium Economy','Business class','First class']}/>
                    </div>
                </div>
                <div className="w-full h-auto">
                    {
                        type===0?<ReturnFlightInput/>:type===1?<OneWayInput/>:<MultiwayWayInput/>
                    }
                </div>
                
            </div>
            {/* <img src={flight_discount} className="object-cover col-start-15 col-end-57 rounded-md mt-4"/> */}
            <div className="col-start-13 col-end-59 mt-4">
            <img src={flight_discount} className="object-cover w-9/12 mx-auto rounded-md mt-4"/>
                <Explore_flights/>
            </div>
            <div className="col-start-15 col-end-57 mt-4">
                <div className="w-full h-auto bg-backCard px-5 py-8 shadow-ShadowLine rounded-md">
                    <div className="text-darkBlue font-bold text-3xl text-center mb-4">Looking for a cheap flight anywhere in the world?</div>
                    <span className="text-LightBlack text-sm text-center">It’s easy around here. 100 million travellers use us as their go-to tool, comparing prices across more than 1,200 airlines and travel providers. With so many cheap flights in one place, you can say hello to savings, and goodbye to stress – here’s how.</span>
                    <div className="grid grid-cols-3 mt-8 gap-4">
                            <img src={"https://content.skyscnr.com/m/3e55723dcc8a2d0f/original/image1.svg"} alt="globe" className="object-cover mx-auto"/>
                            <img src={"https://content.skyscnr.com/m/7b7b3eaf2ab4081c/original/image2.svg"} alt="packet" className="object-cover mx-auto"/>
                            <img src={"https://content.skyscnr.com/m/4ab58b7e3ae3790c/original/image3.svg"} alt="globe" className="object-cover mx-auto"/>
                            <div className="text-darkBlue font-semibold">Search ‘Everywhere’, explore anywhere</div>
                            <div className="text-darkBlue font-semibold">Pay less, go further with transparent pricing</div>
                            <div className="text-darkBlue font-semibold">Book when it's best with Price Alerts</div>
                            <div className="text-LightBlack text-[0.8rem]">Enter your departure airport and travel dates, then hit ‘Everywhere’. You’ll see flights to every destination in the world, cheapest first.</div>
                            <div className="text-LightBlack text-[0.8rem]">Cheap flights. No hidden fees. No funny business. With us, the price you see when you search is what you’ll pay.</div>
                            <div className="text-LightBlack text-[0.8rem]">Found your flight, but not quite ready to book? Set up Price Alerts and we’ll let you know when your flight price goes up or down.</div>
                    </div>
                </div>
            </div>
            <div className="col-start-15 col-end-57 mt-4">
                <div className="w-full h-auto bg-backCard px-5 py-8 shadow-ShadowLine rounded-md">
                    <div className="text-darkBlue font-bold text-3xl text-center mb-4">Flight deals by destination</div>
                    <div className="text-darkBlue font-semibold text-center mb-2 text-lg">Find and compare cheap flights</div>
                    <span className="text-LightBlack text-sm text-center">It’s easy around here. 100 million travellers use us as their go-to tool, comparing prices across more than 1,200 airlines and travel providers. With so many cheap flights in one place, you can say hello to savings, and goodbye to stress – here’s how.</span>
                    <div className="grid grid-cols-3 gap-3 mt-4">
                    <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-skyBlue bg-proGray-100 rounded-lg hover:bg-proGray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 border border-transparent hover:border-skyBlue">
                          <span>New Delhi flights</span>
                          <ChevronUpIcon
                            className={`${
                              open ? '':'transform rotate-180'
                            } w-5 h-5 text-skyBlue`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid grid-cols-1 cursor-pointer bg-backGray">
                            <div className="hover:text-skyBlue">Flights from Mumbai to New Delhi </div>
                            <div className="hover:text-skyBlue">Flights from Bengaluru to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Hyderabad to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Chennai to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Patna to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Kochi to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Kolkata to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Pune to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Ahmedabad to New Delhi</div>
                            <div className="hover:text-skyBlue">Flights from Lucknow to New Delhi</div>
                        </Disclosure.Panel>
                      </>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-skyBlue bg-proGray-100 rounded-lg hover:bg-proGray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span>Mumbai flights</span>
                          <ChevronUpIcon
                            className={`${
                              open ?'':'transform rotate-180'
                            } w-5 h-5 text-skyBlue`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 grid grid-cols-1 cursor-pointer ">
                            
                        </Disclosure.Panel>
                      </>
                    )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-skyBlue bg-proGray-100 rounded-lg hover:bg-proGray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                          <span>Bengaluru flights</span>
                          <ChevronUpIcon
                            className={`${
                              open ?'':'transform rotate-180'
                            } w-5 h-5 text-skyBlue`}
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                          No.
                        </Disclosure.Panel>
                      </>
                    )}
                    </Disclosure>
                    </div>
                </div>
            </div>
        </div>
        {/* <Footer/> */}
    </>
}
export default FlightsHomePage;
