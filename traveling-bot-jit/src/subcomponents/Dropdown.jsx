import { Menu, Transition } from '@headlessui/react'
import { Fragment} from 'react'
import { ChevronDownIcon,CurrencyDollarIcon, CurrencyEuroIcon, CurrencyYenIcon, CurrencyRupeeIcon, CurrencyPoundIcon} from '@heroicons/react/solid'

export default function Dropdown() {
  return (
    <div className="text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full pr-2 py-2 text-md font-medium text-darkBlue rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            INR
            <ChevronDownIcon
              className="w-5 h-5 ml-2 -mr-1 text-darkBlue "
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-darkBlue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CurrencyRupeeIcon  
                    className={`w-5 h-5 mr-2 text-darkBlue${
                      active ? 'text-white' : 'text-darkBlue'
                    } `}
                    aria-hidden="true"/>
                    Rupee
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-darkBlue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CurrencyEuroIcon
                    className={`w-5 h-5 mr-2 text-darkBlue${
                      active ? 'text-white' : 'text-darkBlue'
                    } `}
                    aria-hidden="true"/>
                    Euro
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-darkBlue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CurrencyDollarIcon  
                    className={`w-5 h-5 mr-2 text-darkBlue${
                      active ? 'text-white' : 'text-darkBlue'
                    } `}
                    aria-hidden="true"/>
                    Dollar
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-darkBlue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CurrencyPoundIcon  
                    className={`w-5 h-5 mr-2 text-darkBlue${
                      active ? 'text-white' : 'text-darkBlue'
                    } `}
                    aria-hidden="true"/>
                    Pound
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-darkBlue text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <CurrencyYenIcon  
                    className={`w-5 h-5 mr-2 text-darkBlue${
                      active ? 'text-white' : 'text-darkBlue'
                    } `}
                    aria-hidden="true"/>
                    yen
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}