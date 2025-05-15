// eslint-disable-next-line react/prop-types, no-unused-vars
const ExperienceItem = ({ date, title, company, details, logo }) => {
    return (
      <ol className="ml-6 md:ml-0 flex flex-col md:flex-row relative border-l border-gradient">
        <li className="mb-10 ml-4 ">
          <div className="absolute w-3 h-3 bg-gradient rounded-full mt-2.5 -left-1.5 border border-white"></div>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 text-md md:text-xl">
            <span className="inline-block px-2 py-1 font-semi text-white bg-gradient rounded-md">
              {date}
            </span>
            <h3 className="text-xl font-semi text-stone-100">{title}</h3>
            <div className="my-1 text-lg font-normal leading-none text-stone-400">
              {company}
            </div>
          </div>
          <ul className="list-disc ml-8">
            {details.map((detail, index) => (
              <li key={index} className="my-2 text-lg font-normal text-stone-100">
                {detail}
              </li>
            ))}
          </ul>
        </li>
      </ol>
    );
  };
  
  export default ExperienceItem;