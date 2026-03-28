import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import ErrorBoundary from '@/components/ErrorBoundary';
import Details from '@/sections/Details';
import Experience from '@/sections/Experience';
import Projects from '@/sections/Projects';
import Runs from '@/sections/Runs';

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
