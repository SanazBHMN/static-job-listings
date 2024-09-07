import data from "../data.json";

function JobCard() {
  const item = data[0];
  return (
    <div className="border m-auto shadow-xl shadow-filterTablets">
      <section className="p-6 relative">
        <div className="w-14 h-14 absolute top-[-30px]">
          <img src={item.logo} alt="logo" />
        </div>
        <div className="mt-4">
          <div className="flex justify-start items-center gap-6">
            <h3 className="text-primary font-bold">{item.company}</h3>
            <div className="flex gap-4">
              {item.new && (
                <p className="w-full h-full bg-primary px-3 pt-1 text-white rounded-full">
                  NEW!
                </p>
              )}
              {item.featured && (
                <p className="w-full h-full bg-darkText px-3 pt-1 text-white rounded-full">
                  FEATURED
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col items-start sm:flex-row sm:justify-between sm:items-center text-text">
            <div className="w-full my-3 pb-3 border-b-2 sm:border-none">
              <h3 className="my-3 font-semibold text-darkText">
                {item.position}
              </h3>
              <span>{item.postedAt} &#x2022;</span>
              <span className="ml-2">{item.contract} &#x2022;</span>
              <span className="ml-2">{item.location}</span>
            </div>
            <ul className="flex flex-wrap gap-4 mt-1 sm:flex-nowrap">
              <li className="bg-filterTablets px-3 pt-1 text-primary rounded-sm">
                {item.role}
              </li>
              <li className="bg-filterTablets px-3 pt-1 text-primary rounded-sm">
                {item.level}
              </li>
              {item.languages.map((language) => (
                <li
                  key={language}
                  className="bg-filterTablets px-3 pt-1 text-primary rounded-sm"
                >
                  {language}
                </li>
              ))}
              {item.tools.map((tool) => (
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
