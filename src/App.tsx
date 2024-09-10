import { useState } from "react";

import JobCard from "./components/JobCard";
import SearchInput from "./components/SearchInput";

import "./App.css";
import data from "./data.json";
import Header from "./components/Header";

function App() {
  const [jobs, setJobs] = useState(data);
  const [showInput, setShowInput] = useState(false);
  const [inputOptions, setInputOptions] = useState([]);

  const handleShowInput = () => {
    setShowInput(true);
  };

  const handleInputOptions = (option: string) => {
    // const inputValues: string[] = [...inputOptions, option];
    const inputValues: string[] = !inputOptions.includes(option)
      ? [...inputOptions, option]
      : [...inputOptions];
    console.log(inputValues);
    setInputOptions(inputValues);
  };

  const handleClearInput = () => {
    setInputOptions([]);
    setShowInput(false);
  };

  const handleRemoveOption = (text: string) => {
    const updatedInputValues = inputOptions.filter((option) => option !== text);
    setInputOptions(updatedInputValues);

    // Hide the input when there are no values
    if (updatedInputValues.length === 0) {
      setShowInput(false);
    }
  };

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
        {jobs.map((job) => (
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
