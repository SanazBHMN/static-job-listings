import { useState } from "react";
import JobCard from "./components/JobCard";
import "./App.css";
import data from "./data.json";


interface Job {
  id: Number;
  company: String;
  logo: String;
  new: Boolean;
  featured: Boolean;
  position: String;
  role: String;
  level: String;
  postedAt: String;
  contract: String;
  location: String;
  languages: String[];
  tools: String[];
}

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
