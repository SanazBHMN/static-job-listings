import "./App.css";
import JobCard from "./components/JobCard";

import data from "./data.json";

function App() {
  return (
    <>
      <header className="bg-primary h-36 bg-headerMobile bg-repeat-x sm:bg-headerDesktop">
        <div></div>
      </header>
      <main>
        <JobCard />
      </main>
    </>
  );
}

export default App;
