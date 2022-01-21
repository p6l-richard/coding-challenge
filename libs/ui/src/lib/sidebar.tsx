import React, { useState } from 'react';
import './sidebar.module.css';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [availability, setAvailability] = useState('');
  const [isCopied, setIscopied] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    event.preventDefault();
    setAvailability(event.target.value);
  }

  async function copyToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      /* not neccessary but i want it to work on IE */
      return document.execCommand('copy', true, text);
    }
  }

  function handleClick(text: string) {
    copyToClipboard(text)
      .then(() => {
        setIscopied(true);
        setTimeout(() => {
          setIscopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="w-full p-6 max-w-xs bg-gray-50">
      <div className=" mr-0 ml-auto h-10 w-10 bg-red-400 rounded-md flex items-center justify-center">
        <span className=" text-white text-2xl">&#10005;</span>
      </div>
      <form>
        <div className="form-group mb-2">
          <label htmlFor="duration" className="block font-bold mb-1">
            Duration{' '}
          </label>
          <div className="relative">
            <select
              id="duration"
              name="duration"
              className="text-gray-500 appearance-none py-3 px-4 pl-0"
            >
              <option value="Option1">30 min </option>
              <option value="Option2">60 min </option>
            </select>
            <div className="pointer-events-none inline items-center">
              <span className="text-sm">&#9660;</span>
            </div>
          </div>
        </div>
        <div className="form-group mb-2">
          <label htmlFor="eventType" className="block font-bold mb-1">
            Event type
            <div className="w-4 h-4  ml-2 my-auto bg-blue-500 rounded-xl inline-flex justify-center items-center align-center">
              <span className="text-white text-xs">&#161;</span>
            </div>
          </label>
          <div className="relative ">
            <select
              id="eventType"
              name="eventType"
              className="block w-full appearance-none py-3 px-4 pl-0 text-gray-500"
            >
              <option value="Option1">Share slots</option>
              <option value="Option2">Do not share slots</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
              <span className="text-sm">&#9660;</span>
            </div>
          </div>
        </div>
        <div className=" flex items-center justify-between form-group form-check mb-1">
          <label htmlFor="saveplaceholder" className="font-bold">
            Save placeholders
          </label>
          <input
            className="form-check-input h-4 w-4"
            type="checkbox"
            id="saveplaceholder"
            name="saveplaceholder"
            value="save"
          />
        </div>
        <div className="form-group mb-6">
          <textarea
            className="form-control block w-full
            px-3 py-1.5
            text-base font-normal 
            leading-tight
            border border-solid border-gray-300
            rounded-lg
            m-0 bg-inherit bg-clip-padding"
            id="pname"
            name="pname"
            placeholder="Type placeholder name here"
            rows={2}
          />
        </div>

        <div className="form-group mb-6">
          <textarea
            className="form-control block 
            w-full
            px-3 py-1.5
            text-base font-normal 
            leading-tight
            border border-solid border-gray-300
            rounded-lg 
            bg-inherit bg-clip-padding
            m-0"
            id="availabilities"
            name="availabilities"
            placeholder="Start selecting availabilities you would like to share on the calender"
            rows={8}
            value={availability}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="button"
          value={isCopied ? 'Copied !' : 'Copy to clipboard'}
          className="w-full px-6 py-2.5 text-blue-600 font-bold text-lg rounded-lg border-2 border-solid border-blue-600"
          onClick={() => handleClick(availability)}
        />
      </form>
    </div>
  );
}

export default Sidebar;
