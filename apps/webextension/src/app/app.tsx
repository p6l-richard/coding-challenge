import styles from './app.module.css';
import { Sidebar } from '@coding-challenge/ui';

export function App() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Sidebar duration='Duration' event='Event Type' placeHolder='Save placeholders' />
    </div>
  );
}

export default App;
