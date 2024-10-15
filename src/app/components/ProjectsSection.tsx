import React from "react"
import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    name: "Hand-Gesture-Recognition",
    brief: "Gesture-controlled web navigation system.",
    description: "Developed a system that opens a website using specific hand gestures by employing Python, OpenCV for image processing, and Mediapipe for tracking hand movements. The result was a successful recognition of gestures with high accuracy, allowing users to interact with web content seamlessly through hand gestures.",
    image: "/HGR1.png",
  },
  {
    name: "Music-Melody Analysis System",
    brief: "Application to recommend music based on a user’s emotional state.",
    description: "This application utilized Python for sentiment analysis and libraries like NLTK or TextBlob for sentiment processing. It was designed to recommend music based on the user’s current emotions. By analyzing user sentiment, the app delivers personalized, mood-based music suggestions, enhancing user experience with accurate recommendations.",
    image: "/mus.png",
  },
  {
    name: "Automatic Evaluation of Answer Scripts using LLM",
    brief: "Automated system for evaluating answer scripts using Large Language Models (LLMs).",
    description: "The project focused on creating a system to evaluate answer scripts using LLMs. Python was used to build a library with LLMs, and evaluation metrics such as relevance, faithfulness, and bias were implemented. The automated system provided accurate evaluations, contributing to academic research by offering a scalable solution for educational assessments.",
    image: "/EVAL.png",
  },
  {
    name: "Cervical Cancer Risk Assessment",
    brief: "A website to assess cervical cancer risk using machine learning.",
    description: "This project involved developing a user-friendly platform for assessing cervical cancer risk. It utilized XGBoost for machine learning, Flask for backend, React JS for frontend, Pandas for data handling, and HTML,CSS and javaScript for web design. The tool helps doctors prioritize early intervention while empowering women with accessible, understandable risk assessments, aiding them in making informed health decisions.",
    image: "/ccra.png",
  },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className={`flex flex-col ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} md:space-x-12`}
          >
            <div className="md:w-1/2">
              <Image
                src={project.image}
                alt={project.name}
                width={500}
                height={500}
                className="rounded-xl shadow-xl"
              />
            </div>

            <div className="mt-8 md:w-1/2">
              <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
              <ul className="list-disc list-inside text-xl text-neutral-600 dark:text-neutral-400">
                <li className="mb-2 font-semibold">Brief: {project.brief}</li>
                <li>Description: {project.description}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
