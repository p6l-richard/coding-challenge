import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FcInfo } from 'react-icons/fc'
import './sidebar.module.css';

/* eslint-disable-next-line */
export interface SidebarProps {}

export function Sidebar(props: SidebarProps) {
  const [ copyText, setCopyText ] = useState('')
  const [ isCopied, setIsCopied ] = useState(false)

  const copyToClipboard = (e: any) => {
    e.preventDefault()
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
    navigator.clipboard.writeText(copyText);
  }

  return (
    <div className='bg-gray-50 p-5 w-100 h-100 flex-col'>
      <div className="flex flex-row-reverse">
        <div className='inline-block w-1/5 mb-4 p-1 flex justify-center items-center self-end bg-red-500 text-white rounded-lg'>
          <AiOutlineClose size={35} />
        </div>
      </div>

      <div className="inline-block mb-2">
        <label htmlFor="duration" className='block mb-1 font-black'>
          Duration
        </label>
        <div className="inline-block">
          <select className="outline-0 text-gray-400 bg-transparent py-2 pr-1 pl-0" id='duration' name='duration'>
            <option value='15'>15 min</option>
            <option value='30'>30 min</option>
          </select>
        </div>
      </div>

      <div className="inline-block mb-2 w-full">
        <label htmlFor="eventType" className='inline-block mb-1 font-black flex items-center'>
          <span className="mr-2">Event type</span>
          <FcInfo className='inline' size={15} />
        </label>
        <div className="inline-block w-full">
          <select className="block w-full outline-0 text-gray-400 bg-transparent py-2" id='eventType' name='eventType'>
            <option value='share'>Share slots</option>
            <option value='notShare'>Do not share slots</option>
          </select>
        </div>
      </div>

      <div className="mb-2">
        <div className='flex justify-between items-center align-center'>
          <label
            htmlFor="savePlaceholder"
            className='inline-block mb-1 font-black flex items-center'>
              Save placeholders
            </label>
          <input
            type="checkbox"
            name="savePlaceholder" id="savePlaceholder"
            className='w-5 h-5 mb-1'
            checked
          />
        </div>
        <div>
          <textarea
            className='mb-3 p-3 border-2 rounded-lg resize-none'
            placeholder="Type placeholder name here"
            rows={2}
          />
        </div>

        <div>
          <textarea
            className='mb-4 p-3 border-2 rounded-lg resize-none'
            placeholder="Start selecting availabilities you would like to share on the calendar"
            rows={6}
            value={copyText}
            onChange={(e) => setCopyText(e.target.value)}
          />
        </div>
      </div>

      <button
        className='w-full
          px-5 py-2
          font-black
          text-blue-600
          border-2
          border-blue-500
          rounded-lg'
        onClick={(e) => copyToClipboard(e)}
        >
          {
            isCopied ? 'Copied!' : 'Copy to clipboard'
          }
      </button>
    
    </div>
  );
}

export default Sidebar;
