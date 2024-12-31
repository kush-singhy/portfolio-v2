import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import Details from './sections/Details';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Runs from './sections/Runs';

function App() {
  return (
    <div className="flex flex-col lg:flex-row">
      <Details />

      <div className="flex flex-col gap-28 w-full p-6 lg:p-16 lg:h-full">
        <Experience />
        <Projects />
        <Runs />
      </div>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
