import './sidebar.module.css';
import { useState } from 'react';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [clipBoard, setClipboard] = useState('');
  const handleSubmit = () => {
    navigator.clipboard.writeText(clipBoard);
  };
  return (
    <div className="h-screen mt-16 p-6">
      <div className="flex justify-end">
        <button className="text-white bg-red-600 h-12 w-12 text-4xl rounded-lg">
          X
        </button>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold text-2xl">Duration</h3>
        <select className="bg-slate-50 text-xl text-slate-500 mt-6">
          <option className="" value="">
            30 min
          </option>
        </select>
      </div>

      <div className="flex justify-start items-center mt-8">
        <h3 className="font-semibold text-2xl">Event type</h3>
        <div className="pl-4">
          <div className="bg-blue-700 h-6 w-6 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">i</span>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <select className="bg-slate-50 text-xl text-slate-500 w-full">
          <option value="">Share slots</option>
        </select>
      </div>

      <div className="flex justify-between items-center mt-8">
        <h3 className="font-semibold text-2xl">Save placeholders</h3>
        <input type="checkbox" className="h-6 w-6 decoration-blue-700"></input>
      </div>

      <div className="text-slate-500 bg-slate-50 rounded-lg border-solid border-2 border-slate-500 h-20 mt-2 flex justify-center">
        <textarea
          className="p-1 mt-1 w-11/12"
          placeholder="Type placeholder name here"
        ></textarea>
      </div>

      <div className="text-slate-500 bg-slate-50 rounded-lg border-solid border-2 border-slate-500 mt-4 h-56 flex justify-center">
        <textarea
          className="p-1 mt-1 w-11/12"
          placeholder="Start selecting availabilities you would like to share on the calendar"
          id="clipBoard"
          value={clipBoard}
          onChange={(e) => setClipboard(e.target.value)}
        ></textarea>
      </div>

      <div className="flex justify-center mt-6">
        <button
          id="btn"
          type="submit"
          onClick={handleSubmit}
          className="border-solid border-2 border-blue-700 rounded-lg text-blue-700 font-semibold text-2xl w-full py-3"
        >
          Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
