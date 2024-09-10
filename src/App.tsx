import { useEffect, useState } from "react";

import JobCard from "./components/JobCard";
import SearchInput from "./components/SearchInput";

import "./App.css";
import data from "./data.json";
import Header from "./components/Header";

function App() {
  const [jobs, setJobs] = useState(data);
  const [filteredJobs, setFilteredJobs] = useState(data);
  const [showInput, setShowInput] = useState(false);
  const [inputOptions, setInputOptions] = useState<string[]>([]);

  // Handle showing the input
  const handleShowInput = () => {
    setShowInput(true);
  };

  // Add input options when a Tablet is clicked
  const handleInputOptions = (option: string) => {
    // const inputValues: string[] = [...inputOptions, option];
    const inputValues: string[] = !inputOptions.includes(option)
      ? [...inputOptions, option]
      : [...inputOptions];
    setInputOptions(inputValues);
  };

  // Clear all input options
  const handleClearInput = () => {
    setInputOptions([]);
    setShowInput(false);
  };

  // Remove a specific option
  const handleRemoveOption = (text: string) => {
    const updatedInputValues = inputOptions.filter((option) => option !== text);
    setInputOptions(updatedInputValues);

    // Hide the input when there are no values
    if (updatedInputValues.length === 0) {
      setShowInput(false);
    }
  };

  useEffect(() => {
    if (inputOptions.length > 0) {
      const filteredJob = jobs.filter((job) => {
        const jobTags = [job.role, job.level, ...job.languages, ...job.tools];
        return inputOptions.every((option) => jobTags.includes(option));
      });
      setFilteredJobs(filteredJob);
    } else {
      setFilteredJobs(jobs);
    }
  }, [inputOptions]);

  return (
    <div className="bg-backgroud">
      <Header />
      <main className="w-11/12 m-auto sm:mt-20 h-full relative">
        {showInput && (
          <SearchInput
            inputOptions={inputOptions}
            handleClearInput={handleClearInput}
            handleRemoveOption={handleRemoveOption}
          />
        )}
        {filteredJobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            showInput={showInput}
            handleShowInput={handleShowInput}
            handleInputOptions={handleInputOptions}
          />
        ))}
      </main>
    </div>
  );
}

export default App;
