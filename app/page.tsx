import About from '@/Components/PagesComponents/About'
import Footer from '@/Components/PagesComponents/Footer'
import Header from '@/Components/PagesComponents/Header'
import Projects from '@/Components/PagesComponents/Projects'
import SkillsTools from '@/Components/PagesComponents/SkillsTools'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <About/>
      <SkillsTools/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page