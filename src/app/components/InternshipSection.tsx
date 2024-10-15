import React from 'react'

const internships = [
  {
    title: "Microsoft Office Suite and Research Intern ",
    company: "Global Academy of Technology",
    duration: "December 2022 - January 2023",
    description: "As an intern, I contributed to various research projects by leveraging Microsoft Office Suite for comprehensive data analysis and reporting. My role involved gathering and analyzing data, creating detailed reports, and supporting research initiatives. This experience enhanced my skills in data-driven decision-making, organization, and communication.",
  },
  
  {
    title: "Accenture North America Data Analytics and Visualization Job Simulation",
    company: "Forage",
    duration: "July 2024",
    description: "This internship simulation at Accenture focused on advising a hypothetical social media client through data analytics and visualization. I cleaned and modeled seven datasets, identified content trends, and prepared a PowerPoint presentation to communicate insights. The experience honed my data analysis, visualization, and presentation skills, while also familiarizing me with business decision-making processes."}
]

const InternshipSection = () => {
    return (
      <section id="internship">
        <h1 className="my-10 text-center font-bold text-4xl">
          Internships
          <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {internships.map((internship, idx) => (
            <div key={idx} className="flex flex-col p-6  bg-stone-800 rounded-lg shadow-md dark:bg-white">
              <h2 className="text-3xl font-bold text-blue-400 mb-2">{internship.title}</h2>
              <h3 className="text-xl text-violet-500 mb-2">{internship.company}</h3>
              <p className="text-lg  text-neutral-200 dark:text-neutral-600 mb-4">{internship.duration}</p>
              <p className="text-lg leading-7 text-neutral-200 dark:text-neutral-600">
                {internship.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  
  export default InternshipSection
