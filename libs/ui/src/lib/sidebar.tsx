import './sidebar.module.css';
import { AiOutlineClose } from "react-icons/ai";
import { HiInformationCircle } from "react-icons/hi"



/* eslint-disable-next-line */
export interface SidebarProps { }

export function Sidebar(props: SidebarProps) {
  return (
    <div className='w-full h-full'>

      <div className="object-none object-left pt-10 w-60 h-full pr-5 pl-5">
        <div>
          <button className="float-right h-10 px-2.5 text-red-100 transition-colors text-xl duration-150 bg-red-500 rounded-lg focus:shadow-outline hover:bg-red-800">
            <AiOutlineClose />
          </button>
        </div>

        <div className='mt-20 flex flex-col '>
          <label
            className='font-bold ml-1'
            htmlFor='duration'
          >
            Duration
          </label>
          <select
            className='w-20 mt-2 rounded-sm'
            name="duration"
            id="duration"
          >
            <option value="30 mins">30 mins</option>
            <option value="45 mins">45 mins</option>
            <option value="1 hour">1 hour</option>
            <option value="2 hours">2 hours</option>
          </select>

          <div className='mt-5 flex flex-row'>
            <label className='font-bold ml-1' htmlFor='event-type'>Event Type </label><p className='text-blue-500'><HiInformationCircle /></p>
          </div>

          <select className='w-50 mt-2 rounded-sm' name="event-type" id="event-type">
            <option value="30 mins">Share slots</option>

          </select>

          <div className='mt-5 flex flex-row'>
            <label
              className='font-bold ml-1'
              htmlFor='save-placeholders'
            >
              Save Placeholders
            </label>
            <input type={'checkbox'}></input>
          </div >
        </div>
      </div>
    </div>

  );
}

export default Sidebar;
