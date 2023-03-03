import React, { useContext } from 'react'
import { sender } from '../../Store'
import Heading from '../Heading'
import './Skills.css'

const Skills = () => {
  let {mode,setMode}=useContext(sender)

  let skills = [
    {
      id: 1,
      percentage: "60%",
      title: "HTML"
    },
    {
      id: 2,
      percentage: "50%",
      title: "CSS"
    },
    {
      id: 3,
      percentage: "50%",
      title: "Bootstrap"
    },
    {
      id: 4,
      percentage: "25%",
      title: "JAVASCRIPT"
    },
    {
      id: 5,
      percentage: "60%",
      title: "REACT"
    },



  ]
  return (
    <>
      <h1>
        <div className={`container-fluid bg-${mode?'dark':'light'} text-${mode?'light':'dark'}`} id='skills'>
          <Heading title="My Skills" description="Know About My Skills" size="75px"/>
          <div className="row align-items-center skills">
            {
              skills.map((e) => {
                return (
                  <div className='col-md-4 text-center'>
                    <div className={`bar mx-auto text-${mode?'dark':'dark'}`}data-progress={e.percentage} style={{'--progress':e.percentage}}>{e.percentage}</div>
                    <h1>{e.title}</h1>
                  </div>
                )
              })
            }
          </div>
        </div>
      </h1>
    </>
  )
}

export default Skills