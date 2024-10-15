import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/page.module.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ProjectsSection from './components/ProjectsSection'
import InternshipSection from './components/InternshipSection'
import AchievementsSection from './components/AchievementsSection'
import Footer from './components/Footer'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl'>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <InternshipSection/>
      <AchievementsSection/>
      <Footer/>
    </main>
  )
}
