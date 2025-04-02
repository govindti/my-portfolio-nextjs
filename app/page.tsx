import About from '@/Components/PagesComponents/About'
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
    </div>
  )
}

export default page