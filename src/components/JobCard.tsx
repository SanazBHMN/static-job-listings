function JobCard({ job }) {
  return (
    <div className="w-11/12 m-auto bg-white rounded-md my-12 shadow-2xl shadow-filterTablets sm:w-10/12 sm:my-6">
      <section className="p-6 relative md:static md:flex md:items-center gap-5">
        <div className="w-14 h-14 absolute top-[-30px] md:static md:w-16 md:h-16">
          <img src={job.logo} alt="logo" />
        </div>
        <div className="mt-4 md:w-full">
          <div className="flex justify-start items-center gap-6">
            <h3 className="text-primary font-bold">{job.company}</h3>
            <div className="flex gap-4">
              {job.new && (
                <p className="w-full h-full bg-primary px-3 pt-1 text-white rounded-full">
                  NEW!
                </p>
              )}
              {job.featured && (
                <p className="w-full h-full bg-darkText px-3 pt-1 text-white rounded-full">
                  FEATURED
                </p>
              )}
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
              <li className="bg-filterTablets px-3 pt-1 text-primary rounded-sm">
                {job.role}
              </li>
              <li className="bg-filterTablets px-3 pt-1 text-primary rounded-sm">
                {job.level}
              </li>
              {job.languages.map((language) => (
                <li
                  key={language}
                  className="bg-filterTablets px-3 pt-1 text-primary rounded-sm"
                >
                  {language}
                </li>
              ))}
              {job.tools.map((tool) => (
                <li
                  key={tool}
                  className="bg-filterTablets px-3 pt-1 text-primary rounded-sm"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default JobCard;
