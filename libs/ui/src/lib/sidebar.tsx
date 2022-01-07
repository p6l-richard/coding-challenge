import {useState} from 'react';

import {EventType} from '@coding-challenge/data';

import {CLOSE_ICON} from './constants/icons';
import './sidebar.module.css';

interface Option {
  key: any;
  value: string;
}

export interface SidebarProps {
  durationOptions: Option[];
  eventTypes: Option[];
}

export function Sidebar(props: SidebarProps) {

  const { durationOptions, eventTypes } = props;
  const [availability, setAvailability] = useState<string>('');
  const [placeholder, setPlaceholder] = useState<string>();
  const [selectedDuration, setSelectedDuration] = useState<string>();
  const [selectedEventType, setSelectedEventType] = useState<EventType>();

  return (
    <div className="w-64 h-full bg-slate-50 pt-20 pr-5 pl-5">
      <div className="flow-root">
        <button className="float-right w-10 h-10 bg-red-500 rounded-lg text-white drop-shadow-md ...">
          {CLOSE_ICON}
        </button>
      </div>
      <div className="mt-4">
        <label className="font-semibold ..." htmlFor="duration">Duration</label>
        <select
          className="block bg-white text-gray-500 focus:outline-none"
          defaultValue='30'
          id="duration"
          value={selectedDuration}
          onChange={event => setSelectedDuration(event.target.value)}
        >
          {durationOptions && durationOptions.map((option: Option) => (
            <option key={option.key} value={option.key}>{option.value}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label className="font-semibold ..." htmlFor="eventType">Event type
          <i className="fa fa-info-circle pl-2 font-thin text-blue-500"/>
        </label>
        <select
          className="w-full block bg-white text-gray-500 focus:outline-none"
          id="eventType"
          value={selectedEventType}
          onChange={event => setSelectedEventType(Number(event.target.value))}
        >
          {eventTypes && eventTypes.map((option: Option) => (
            <option key={option.key} value={option.key}>{option.value}</option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <div className="block">
          <label className="font-semibold float-left ..." htmlFor="placeholders">Save placeholders</label>
          <input type="checkbox" className="float-right mt-1 text-gray-500 scale-150 mr-2"/>
          <textarea
            className="w-52 border border-gray-300 rounded-lg placeholder:text-sm p-2 mt-1 text-gray-500 focus:outline-none ..."
            id="placeholders"
            placeholder="Type placeholder name here"
            value={placeholder}
            onChange={event => setPlaceholder(event.target.value)}
          />
        </div>
      </div>

      <div className="mt-2">
            <textarea
              className="h-60 w-52 border border-gray-300 rounded-lg placeholder:text-sm text-gray-500 p-2 mt-1 focus:outline-none ..."
              id="availability"
              placeholder="Start selecting availabilities you would like to share on the calendar"
              value={availability}
              onChange={event => setAvailability(event.target.value)}
            />
      </div>

      <div className="mt-4">
        <button
          className="w-full bg-white border border-blue-500 rounded-lg text-blue-500 font-bold text-l p-2"
          onClick={() => navigator.clipboard.writeText(availability)}>Copy to clipboard
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
