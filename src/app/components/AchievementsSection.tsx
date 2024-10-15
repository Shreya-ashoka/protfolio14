import React from 'react'

const achievements = [
  {
    title: "1st Place - WEBATHON PHASE-1",
    description: "Secured 1st place in WEBATHON PHASE-1 with team WEBEGETTERS_CLUB for a Figma design project at the Global Academy of Technology.",
  },
  {
    title: "Code-AI 2024 Presentation",
    description: "Presented on 'Efficiently Automated Evaluation of Answer Scripts Using NLP and Deep Learning' at the prestigious Code-AI 2024 International Conference.",
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievement">
      <h1 className="my-10 text-center font-bold text-4xl">
        Achievements
        <hr className="w-6 h-1 mx-auto my-4 bg-violet-500 border-0 rounded"></hr>
      </h1>

      <div className="max-w-4xl mx-auto space-y-6 mb-20">
        {achievements.map((achievement, index) => (
          <div key={index} className="p-4 bg-gray-800  rounded-lg shadow-lg dark:bg-stone-800">
            <h2 className="text-2xl font-semibold text-violet-500">
              {achievement.title}
            </h2>
            <p className="mt-2 text-lg text-gray-200">
              {achievement.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default AchievementsSection
