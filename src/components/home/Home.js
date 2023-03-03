import React, { useContext } from 'react'
import { sender } from '../../Store'
import './Home.css'

const Home = () => {

  let { mode, setMode } = useContext(sender)

  return (
    <>
      <div className={`container-fluid bg-${mode ? 'dark' : 'light'}` } id='home'>
        <div className="row home align-items-center">
          <div className={`col-6 text-${mode ? 'light' : 'dark'}`}>
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, at. Voluptates voluptatum error excepturi nam mollitia praesentium, rerum aperiam culpa a vero consequatur aspernatur, corporis officia quaerat tempora ab molestias labore obcaecati consequuntur ducimus ut atque quod at! Consectetur, sed at! Sint delectus molestiae modi omnis reprehenderit aspernatur consequuntur nemo.</p>
          </div>
          <div className="col-6">
            <img src="images/home/pexels-ivan-samkov-4458549.jpg" width="100%" height="500vh" alt="" />
          </div>
        </div>
      </div>

    </>
  )
}

export default Home