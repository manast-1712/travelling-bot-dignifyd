import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment ,useState} from 'react'
import {HiOutlineMinusCircle} from 'react-icons/hi';
import {MdAddCircleOutline} from 'react-icons/md';

export const CustomPopover=({arr})=>{
  const [option,setOption]=useState(arr[0]);
  return (
    <div className="w-full max-w-sm relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group bg-transparent text-skyBlue px-1 inline-flex items-center text-base text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span>{option}</span>
              <ChevronDownIcon
                className={`${open ? '' : 'text-opacity-70'}
                  ml-2 h-5 w-5 text-LightBlack group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
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
              <Popover.Panel className="absolute right-0 z-10 w-auto px-4 transform -translate-y-8 sm:px-0 bg-white rounded-md">
                <div className="overflow-hidden rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <ul className="relative bg-white px-2 py-4">
                    {arr.map((item,i) => (
                      <li key={i} className={`h-10 w-44 flex items-center px-2 rounded-md text-sm ${option===item?" bg-proGray-200":"bg-white cursor-pointer"}`} onClick={()=>setOption(arr[i])}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}


export const CountTravelers=()=>{
  const [countTrav,setCountTrav]=useState({
    Adult:1,
    Children:0,
    Infants:0
  });
  let totalTravelers=countTrav.Adult+countTrav.Children+countTrav.Infants;

  return<>
  <div className="w-full max-w-sm relative">
  <Popover className="relative">
    {({ open }) => (
      <>
        <Popover.Button
          className={`
            ${open ? '' : 'text-opacity-90'}
            text-white group bg-transparent text-skyBlue px-1 flex justify-center items-end text-base text-[0.9rem] hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className='h-auto w-20'>{totalTravelers}{`${totalTravelers==1?" traveller":" travellers"}`}</span>
          <ChevronDownIcon
            className={`${open ? '' : 'text-opacity-70'}
              ml-1 h-5 w-5 text-LightBlack group-hover:text-opacity-80 transition ease-in-out duration-150`}
            aria-hidden="true"
          />
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
          <Popover.Panel className="absolute right-0 z-10 w-auto px-4 transform -translate-y-8 sm:px-0 ">
            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <ul className="relative bg-white px-2 py-4">
                <span className='font-bold text-LightBlack my-2'>Travellers</span>
                  <li className={`h-10 w-80 grid grid-cols-2 px-2 rounded-md text-sm mb-2`}>
                    <div className='flex items-center'>Adults</div>
                      <div className='flex justify-evenly items-center text-LightBlack'>
                        <HiOutlineMinusCircle className='text-xl hover:text-skyBlue' onClick={()=>{
                          let c=countTrav.Adult-1;
                          c>=0?setCountTrav({...countTrav,Adult:c}):setCountTrav({...countTrav})
                        }}/>
                        {countTrav.Adult}
                        <MdAddCircleOutline className='text-xl hover:text-skyBlue' onClick={()=>setCountTrav({...countTrav,Adult:countTrav.Adult+1}) }/>
                      </div>
                  </li>
                  <li className={`h-10 w-80 grid grid-cols-2 px-2 rounded-md text-sm mb-4`}>
                    <div className='flex flex-col'><span>Children</span><span className='text-[0.7rem] text-LightBlack'>Ages 2 to 17</span></div>
                      <div className='flex justify-evenly items-center text-LightBlack'>
                        <HiOutlineMinusCircle className='text-xl hover:text-skyBlue' onClick={()=>{
                          let c=countTrav.Children-1;
                          c>=0?setCountTrav({...countTrav,Children:c}):setCountTrav({...countTrav})
                        }}/>
                        {countTrav.Children}
                        <MdAddCircleOutline className='text-xl hover:text-skyBlue' onClick={()=>setCountTrav({...countTrav,Children:countTrav.Children+1}) }/>
                      </div>
                  </li>
                  <li className={`h-10 w-80 grid grid-cols-2 px-2 rounded-md text-sm mb-4`}>
                    <div className='flex flex-col'><span>Infants</span><span className='text-[0.7rem] text-LightBlack'>Younger than 2</span></div>
                      <div className='flex justify-evenly items-center text-LightBlack'>
                        <HiOutlineMinusCircle className='text-xl hover:text-skyBlue'  onClick={()=>{
                          let c=countTrav.Infants-1;
                          c>=0?setCountTrav({...countTrav,Infants:c}):setCountTrav({...countTrav});
                        }}/>
                        {countTrav.Infants}
                        <MdAddCircleOutline className='text-xl hover:text-skyBlue'onClick={()=>setCountTrav({...countTrav,Infants:countTrav.Infants+1}) }/>
                      </div>
                  </li>
                  <Popover.Button className='h-full w-full py-2 text-white bg-skyBlue mt-2 rounded-md'>Done</Popover.Button>
              </ul>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
</div>
</>
}