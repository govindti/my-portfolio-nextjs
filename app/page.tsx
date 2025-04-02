import About from '@/Components/PagesComponents/About'
import Header from '@/Components/PagesComponents/Header'
import SkillsTools from '@/Components/PagesComponents/SkillsTools'
import React from 'react'

function page() {
  return (
    <div>
      <Header/>
      <About/>
      <SkillsTools/>
    </div>
  )
}

export default page