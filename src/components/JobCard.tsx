import Logo from "./Logo";
import Tablet from "./Tablet";
import Tag from "./Tag";

interface JobCardProps {
  job: {
    id: number;
    company: string;
    logo: string;
    new: boolean;
    featured: boolean;
    position: string;
    role: string;
    level: string;
    postedAt: string;
    contract: string;
    location: string;
    languages: string[];
    tools: string[];
  };
  showInput: boolean;
  handleShowInput: () => void;
  handleInputOptions: (text: string) => void;
}

function JobCard({
  job,
  showInput,
  handleShowInput,
  handleInputOptions,
}: JobCardProps) {
  return (
    <div className="w-full bg-white rounded-md my-12 shadow-2xl shadow-filterTablets">
      <section className="p-6 relative md:static md:flex md:items-center gap-5">
        <Logo logo={job.logo} />
        <div className="mt-4 md:w-full">
          <div className="flex justify-start items-center gap-6">
            <h3 className="text-primary font-bold">{job.company}</h3>
            <div className="flex gap-4">
              <Tag tags={{ newTag: job.new, featuredTag: job.featured }} />
            </div>
          </div>
          <div className="flex flex-col items-start sm:flex-row sm:justify-between text-text">
            <div className="w-full my-3 pb-3 border-b-2 sm:border-none md:my-1">
              <h3 className="my-3 font-semibold text-darkText md:my-1">
                {job.position}
              </h3>
              <span>{job.postedAt} &#x2022;</span>
              <span className="ml-2">{job.contract} &#x2022;</span>
              <span className="ml-2">{job.location}</span>
            </div>
            <ul className="flex flex-wrap gap-4 mt-1 sm:flex-nowrap">
              <Tablet
                text={job.role}
                handleShowInput={handleShowInput}
                handleInputOptions={handleInputOptions}
              />
              <Tablet
                text={job.level}
                handleShowInput={handleShowInput}
                handleInputOptions={handleInputOptions}
              />
              {job.languages.map((language: string) => (
                <Tablet
                  key={language}
                  text={language}
                  handleShowInput={handleShowInput}
                  handleInputOptions={handleInputOptions}
                />
              ))}
              {job.tools.map((tool: string) => (
                <Tablet
                  key={tool}
                  text={tool}
                  handleShowInput={handleShowInput}
                  handleInputOptions={handleInputOptions}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobCard;
