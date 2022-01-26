import React, { useState, Fragment } from 'react'
import './sidebar.module.css';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

/* eslint-disable-next-line */
export interface SidebarProps {
  duration: 'Duration',
  event: 'Event Type',
  placeHolder: 'Save placeholders'
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export function Sidebar(props: SidebarProps) {

  const [timeDuration, setTimeDuration] = useState([
    '20 Min', '30 Min', '45 Min', '1 hour'
  ])

  const [eventType, setEventType] = useState([
    'Event one', 'Event two', 'Event three', 'Event Four'
  ])

  const [text, setText] = useState('');

  const inputHandler = (event: any) => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setText('')
  }


  return (
    <div className='top-0 left-50 fixed bg-gray-100 w-[25vw] h-full p-10'>

      <div className="grid grid-cols-3 grid-rows-2 col-gap-2 row-gap-10">
        <div className="col-span-4 flex items-end justify-end">
          <button type="button" className="justify-center mb-5 bg-red-500 shadow-lg shadow-white-500/50 text-white rounded-md p-2 inline-flex items-center justify-center hover:bg-red-400 hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>



      {/* Duration DropDown Menu */}



      <p>{props.duration}</p>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full py-2 text-sm font-medium text-gray-400">
            Set the duration
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {timeDuration.map((time, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {time}
                    </a>
                  )}
                </Menu.Item>
              ))}


            </div>
          </Menu.Items>
        </Transition>
      </Menu>




      {/* Event DropDown Menu */}

      <div className="flex mb-2">
        <div className="mr-2">{props.event}</div>
        <div className="w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="blue">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
      </div>


      <Menu as="div" className="relative inline-block text-left w-full">
        <div>
          <Menu.Button className="inline-flex justify-between w-full py-2 text-sm font-medium font-medium text-gray-400">
            Share slots
            <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
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
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              {eventType.map((event, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <a
                      href="#"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm'
                      )}
                    >
                      {event}
                    </a>
                  )}
                </Menu.Item>
              ))}


            </div>
          </Menu.Items>
        </Transition>
      </Menu>

      {/* Placeholder */}



      <div className="inline-flex justify-between w-full py-2 font-medium">
        {props.placeHolder}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 bg-blue-500" fill="none" viewBox="0 0 24 24" stroke="white">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <div>
        <form className="rounded px-4 pt-3 pb-2">
          <textarea
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Type placeholder name here"></textarea>


        </form>
      </div>

      {/* Form */}
      <div>
        <form className="rounded px-4 pt-3 pb-2">
          <textarea
            value={text}
            onChange={inputHandler}
            rows={5}
            className="
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              border border-solid border-gray-300
              rounded-xl
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Start selecting availabilities you
            would like to share on the
            calendar"></textarea>


          <button className="w-full mt-3 text-blue-500 bg-transparent border border-solid border-blue-500 hover:bg-blue-500 hover:text-white active:bg-blue-600 font-bold uppercase px-8 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" onClick={copy}
          >
            Copy to clipboard
          </button>

        </form>

      </div>
    </div>
  );
}

export default Sidebar;

