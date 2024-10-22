import React from 'react';

const certifications = [
  {
    title: 'Cloud Computing for Beginners',
    provider: 'Great Learning',
    description: 'Learned foundational concepts of cloud computing and various service models like IaaS, PaaS, and SaaS.',
  },
  {
    title: 'Introduction to Programming with Python',
    provider: 'Geekster',
    description: 'Gained hands-on experience with Python programming, covering basics like data types, loops, and functions.',
  },
  {
    title: 'Introduction to Frontend Development',
    provider: 'Simplilearn',
    description: 'Covered the essentials of HTML, CSS, JavaScript and React to create responsive web applications.',
  },
  {
    title: 'C Programming Absolute Beginners',
    provider: 'Infosys',
    description: 'Mastered the basics of C programming, including syntax, data structures, and memory management.',
  },
  {
    title: 'Data Mining',
    provider: 'Great Learning',
    description: 'Learned data extraction techniques and pattern recognition using machine learning algorithms.',
  },
  {
    title: 'Building Apps using ChatGPT',
    provider: 'Great Learning',
    description: 'Acquired skills to integrate ChatGPT with web and mobile applications using APIs and frameworks.',
  },
  {
    title: 'R for Data Science',
    provider: 'Cognitive Class',
    description: 'Gained knowledge of data manipulation, visualization, and statistical analysis using the R programming language.',
  },
  {
    title: 'Prompt Engineering for Everyone',
    provider: 'Cognitive Class',
    description: 'Learned how to craft effective prompts to interact with AI models for more accurate and useful outputs.',
  },
  {
    title: 'Introduction to Data Analysis using Microsoft Excel',
    provider: 'Coursera',
    description: 'Learned how to analyze and visualize data using Excel formulas, charts, and pivot tables.',
  },
];

const CertificationSection = () => {
  return (
    <section id="certifications">
      <h1 className="my-10 text-center font-bold text-4xl">
        Certifications
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded" />
      </h1>
      <div>
      {certifications.map((certification, index) => (
        <div key={index} className="p-4 ">
          <h2 className="text-2xl font-semibold text-violet-500">
            {certification.title}
          </h2>
          <p className="text-sm text-gray-400">
            {certification.provider}
          </p>
          <p className="mt-2 text-lg text-gray-200">
            {certification.description}
          </p>
        </div>
      ))}</div>
    </section>
  );
};

export default CertificationSection;
