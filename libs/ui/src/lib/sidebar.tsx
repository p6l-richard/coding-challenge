import './sidebar.module.css';
import { useState } from 'react';
import { VscClose } from 'react-icons/vsc';
import { BsFillInfoCircleFill } from 'react-icons/bs';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [shareText, setShareText] = useState('');

  const copyText = (e: any) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareText);
  };

  return (
    <div className="w-80 flex flex-col justify-center items-center px-6 pt-8 pb-2 bg-gray-50 font-sans">
      <button className="w-12 h-12 bg-red-500	text-white text-4xl	self-end rounded-lg flex justify-center items-center">
        <VscClose size={50} />
      </button>

      <div className="w-full flex	flex-col my-2 mx-0">
        <p className="mb-2 text-xl font-bold">Duration</p>
        <select
          name="duration"
          className="w-1/3 text-gray-500 text-xl bg-inherit appearance-button font-medium"
        >
          <option value="30">30 min</option>
          <option value="60">60 min</option>
          <option value="90">90 min</option>
          <option value="120">120 min</option>
        </select>
      </div>

      <div className="w-full flex	flex-col my-2 mx-0">
        <p className="mb-2 text-xl font-bold">
          Event type
          <BsFillInfoCircleFill
            size={17}
            color="rgb(59 130 246)"
            className="inline-block ml-3 mb-1"
          />
        </p>
        <select
          name="event"
          className="w-full text-gray-500 text-xl mb-2 bg-inherit font-medium"
        >
          <option value="">Share slots</option>
        </select>
      </div>

      <div className="w-full flex	flex-row justify-between items-center">
        <p className="mb-2 text-xl font-bold">Save placeholders</p>
        <input
          type="checkbox"
          name="save"
          checked
          className="bg-blue-500 w-6 h-6 block mb-1"
        />
      </div>
      <form
        action=""
        className="w-full bg-inherit flex flex-col justify-center items-center"
      >
        <textarea
          name="placeholderName"
          placeholder="Type placeholder name here"
          className="w-full h-16 bg-inherit resize-none border border-solid border-gray-400 rounded-2xl px-3 py-1 placeholder:font-medium"
        ></textarea>
        <textarea
          name="availability"
          placeholder="Start selecting availabilites you would  like to share on the calender"
          className="w-full h-40 bg-inherit resize-none border border-solid border-gray-400 rounded-2xl px-3 py-1 placeholder:font-medium my-4"
          onChange={(e) => {
            setShareText(e.target.value);
          }}
        ></textarea>
        <button
          className="w-full h-14 font-bold text-2xl bg-white rounded-2xl border border-solid	border-blue-500 text-blue-500"
          onClick={copyText}
        >
          Copy to clipboard
        </button>
      </form>
    </div>
  );
}

export default Sidebar;
