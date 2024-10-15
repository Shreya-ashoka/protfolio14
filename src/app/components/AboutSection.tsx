import React from "react"
import Image from "next/image"


const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "next JS" },
  { skill: "Python" },
  { skill: "Java" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git/GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I'm Shreya, currently in my final year and based in Bangalore, India. I'm passionate about developing innovative software that simplifies life and creates meaningful connections. With a strong foundation in <span className="font-bold">AI, machine learning, and design</span>, I focus on building solutions that solve real-world problems. I love collaborating with diverse teams and continuously exploring new ways technology can shape the future.
            </p>
            <br />
            <p>
              I am pursuing my degree at Global Academy of Technology, majoring in Artificial Intelligence and Machine Learning, and have been actively working in the field, honing my skills and expertise ever since.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy. From swimming, playing badminton, dancing, to exploring new places, I am always seeking new experiences and love to stay engaged while learning new things.
            </p>
            <br />
            <p>
            I firmly believe in the importance of continuous growth and make it my mission to pursue it. My passion for technology drives me to constantly explore new possibilities and push boundaries. I look forward to the journey ahead in my career and remain open to exciting opportunities.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-700 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                  
                )
              })}
            </div>
            <Image
              src="/abt.png"
              alt=""
              width={400}
              height={400}
              className=" rounded-xl *:hidden md:block md:relative md:bottom-4  md:z-0 mt-6 "
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
