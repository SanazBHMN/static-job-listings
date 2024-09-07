import { useState } from "react";
import "./App.css";
import JobCard from "./components/JobCard";

import data from "./data.json";

function App() {
  const [jobs, setJobs] = useState(data);

  return (
    <div className="bg-backgroud">
      <header className="bg-primary h-36 bg-headerMobile bg-repeat-x sm:bg-headerDesktop">
        <div></div>
      </header>
      <main className="sm:mt-20 h-full">
        {jobs.map((job) => (
          <JobCard job={job} />
        ))}
      </main>
    </div>
  );
}

export default App;
