// import styles from './app.module.css';
// import { Sidebar } from '@coding-challenge/ui';

import {Sidebar} from '@coding-challenge/ui';
import {DURATION_IN_MINUTES, EVENT_TYPES} from '@coding-challenge/data';

export function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Sidebar
        durationOptions={DURATION_IN_MINUTES}
        eventTypes={EVENT_TYPES}
      />
    </div>
  );
}

export default App;
