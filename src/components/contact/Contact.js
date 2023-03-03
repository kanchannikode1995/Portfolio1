import React from 'react'
import Heading from '../Heading'
import Form from './Form'
import Info from './Info'
import './Contact.css'

const Contact = () => {
  return (
    <>
      <div className="container-fluid border border-dark" id="contact">
        <Heading title="Contact Us" description="Want to Work" size="85px" />
        <div className="row align-items-center contact">
          <div className="col-6">
            <Info />
          </div>
          <div className="col-6">
            <Form />

          </div>
        </div>
      </div>
    </>
  )
}

export default Contact