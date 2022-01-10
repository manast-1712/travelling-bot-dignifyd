import { Popover, Transition } from '@headlessui/react';
import { Fragment ,useState} from 'react';
import {MdLocationOn,MdOutlineCompareArrows,MdOutlineCancel} from 'react-icons/md';
import {BsFillCalendarEventFill} from 'react-icons/bs';
import {FaSearch,FaLongArrowAltRight} from 'react-icons/fa';
import {RiAddFill} from 'react-icons/ri';
import { DateRange,Calendar } from 'react-date-range';
import { addDays } from 'date-fns';

export const ReturnFlightInput=()=>{
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate:null,
          key: 'selection'
        }
      ]);
      let Start_Date=new Date(state[0].startDate);
      let End_Date=new Date(state[0].endDate);
    return<>
    <div className='w-full h-auto grid grid-cols-12 gap-2 mt-5 '>
        <div className="col-span-3 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <MdLocationOn className='text-xl'/>
                  <input type="text" placeholder='Leaving from' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                </Popover.Button>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      hi
                    </div>
                  </Popover.Panel>
                </Transition> */}
              </>
            )}
          </Popover>
        </div>
        {  /***2 */}
        <div className='col-span-1 h-12 text-skyBlue flex jutify-center items-center'>
            <MdOutlineCompareArrows className='h-full w-full text-md'/>
        </div>
      {  /***3 */}
      <div className="col-span-3 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <MdLocationOn className='text-xl'/>
                  <input type="text" placeholder='Going to' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                </Popover.Button>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      hi
                    </div>
                  </Popover.Panel>
                </Transition> */}
              </>
            )}
          </Popover>
        </div>
        {/***4 */}
        <div className="col-span-2 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-2 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <BsFillCalendarEventFill/>
                  <div className=' outline-none py-3 pl-2 rounded-md '>{Start_Date.toLocaleDateString()}</div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className=" rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <DateRange
                        months={2}
                        direction="horizontal"
                        minDate={addDays(new Date(), 0)}
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        rangeColors={["#00264D"]}
                        />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        {/**5 */}
        <div className="col-span-2 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-2 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <BsFillCalendarEventFill />
                  <div type="text" placeholder='Returning' className='outline-none py-3 pl-2 rounded-md ' >{End_Date.toLocaleDateString()}</div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className="rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                    <DateRange
                        months={2}
                        direction="horizontal"
                        minDate={addDays(new Date(), 0)}
                        maxDate={addDays(new Date(), 100)}
                        editableDateInputs={true}
                        onChange={item => setState([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={state}
                        rangeColors={["#00264D"]}
                        className='absolute right-0'
                        />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div className='col-span-1 h-12 flex justify-center items-center bg-gradient-to-r from-LightOrange to-DarkOrange text-white rounded-md'>
            <FaSearch className='text-xl'/>
        </div>
    </div>
    </>
}



export const OneWayInput=()=>{
    let [mydate,setMyDate]=useState(new Date().toLocaleDateString());
      function handleSelect(date){
        console.log(date); // native Date object
        setMyDate(date);
      }
    return<>
    <div className='w-full h-auto grid grid-cols-12 gap-2 mt-5 '>
        <div className="col-span-4 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <MdLocationOn className='text-xl'/>
                  <input type="text" placeholder='Leaving from' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                </Popover.Button>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      hi
                    </div>
                  </Popover.Panel>
                </Transition> */}
              </>
            )}
          </Popover>
        </div>
        {  /***2 */}
        <div className='col-span-1 h-12 text-skyBlue flex jutify-center items-center'>
            <FaLongArrowAltRight className='h-8 w-8 mx-auto'/>
        </div>
      {  /***3 */}
      <div className="col-span-4 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <MdLocationOn className='text-xl'/>
                  <input type="text" placeholder='Going to' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                </Popover.Button>
                {/* <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                      hi
                    </div>
                  </Popover.Panel>
                </Transition> */}
              </>
            )}
          </Popover>
        </div>
        {/***4 */}
        <div className="col-span-2 h-14 max-w-sm relative">
          <Popover >
            {({ open }) => (
              <>
                <Popover.Button
                  className={`
                    ${open ? '' : 'text-opacity-90'}
                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-2 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <BsFillCalendarEventFill/>
                  <div className=' outline-none py-3 pl-2 rounded-md '>{mydate}</div>
                </Popover.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute right-0 z-10 w-full px-4 transform -translate-y-14 sm:px-0 bg-white rounded-md">
                    <div className=" rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                        <Calendar
                        date={new Date(mydate)}
                        color={'#0080FF'}
                        minDate={new Date()}
                        onChange={e=>handleSelect(e.toLocaleDateString())}
                        className='absolute right-0'
                        />
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <div className='col-span-1 h-12 flex justify-center items-center bg-gradient-to-r from-LightOrange to-DarkOrange text-white rounded-md'>
            <FaSearch className='text-xl'/>
        </div>
    </div>
    </>
}



export const MultiwayWayInput=()=>{
    const [wsf,setWsf]=useState(1);
    let arr=[];
    for(let i=1;i<=wsf;i++){
        arr.push(i);
    }
    let [mydate,setMyDate]=useState(new Date().toLocaleDateString());
      function handleSelect(date){
        console.log(date); 
        setMyDate(date);
      }
    return<>
       <div className='w-full h-auto grid grid-cols-12 gap-2 mt-5'>
          {
              arr.map((v,i)=>{
                  return<>
                        <div className="col-span-4 h-14 max-w-sm relative">
                          <Popover >
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                  <MdLocationOn className='text-xl'/>
                                  <input type="text" placeholder='Leaving from' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                                </Popover.Button>
                                {/* <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                      hi
                                    </div>
                                  </Popover.Panel>
                                </Transition> */}
                              </>
                            )}
                          </Popover>
                          
                        </div>
                        <div className="col-span-4 h-14 max-w-sm relative">
                          <Popover >
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-1 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                  <MdLocationOn className='text-xl'/>
                                  <input type="text" placeholder='Going to' className='h-full w-full outline-none py-3 pl-2 rounded-md ' />
                                </Popover.Button>
                                {/* <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                                    <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                      hi
                                    </div>
                                  </Popover.Panel>
                                </Transition> */}
                              </>
                            )}
                          </Popover>
                        </div>

                        <div className="col-span-4 h-14 max-w-sm relative">
                          <Popover >
                            {({ open }) => (
                              <>
                                <Popover.Button
                                  className={`
                                    ${open ? '' : 'text-opacity-90'}
                                    h-full w-full outline-none rounded-md text-LightBlack bg-white group text-skyBlue px-2 inline-flex items-center text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                                >
                                  <BsFillCalendarEventFill/>
                                  <div className=' outline-none py-3 pl-2 rounded-md '>{mydate}</div>
                                </Popover.Button>
                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-200"
                                  enterFrom="opacity-0 translate-y-1"
                                  enterTo="opacity-100 translate-y-0"
                                  leave="transition ease-in duration-150"
                                  leaveFrom="opacity-100 translate-y-0"
                                  leaveTo="opacity-0 translate-y-1"
                                >
                                  <Popover.Panel className="absolute right-0 z-10 w-full px-4 transform -translate-y-12 sm:px-0 bg-white rounded-md">
                                    <div className=" rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                                        <Calendar
                                        date={new Date(mydate)}
                                        color={'#0080FF'}
                                        minDate={new Date()}
                                        onChange={e=>handleSelect(e.toLocaleDateString())}
                                        className='absolute right-0'
                                        />
                                    </div>
                                  </Popover.Panel>
                                </Transition>
                              </>
                            )}
                          </Popover>
                          <MdOutlineCancel className='absolute top-0 right-0 text-xl block' onClick={()=>{
                              (wsf-1)<1? setWsf(wsf): setWsf(wsf-1);
                          }}/>
                        </div>
                  </>
              })
          } 
        </div>
        <div className='px-2 py-2 inline-flex items-center  text-LightBlack my-auto cursor-pointer' onClick={()=>{
            wsf+1>5?setWsf(wsf):setWsf(wsf+1);
        }}>
            <RiAddFill />
            Add another flight
        </div>
        <button className="px-6 py-2 flex justify-center items-center bg-gradient-to-r from-LightOrange to-DarkOrange text-white rounded-md mx-auto" >Search</button>
    </>
}