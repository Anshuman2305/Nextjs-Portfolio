import React from 'react'
import Education from './subcomponents/Education'
import Experience from './subcomponents/Experience'

function sidebar() {
  return (
    <div className="sidebar flex flex-col md:flex-row-reverse lg:flex-col w-full max-w-md md:max-w-full lg:max-w-md md:border-[2px] border-dullgreen md:p-2 rounded-2xl">
      <Experience />
      <Education />
    </div>
  )
}

export default sidebar

