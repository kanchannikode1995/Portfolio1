import React, { useContext } from 'react'
import Heading from '../Heading'
import './About.css'
import { BsFillPersonFill, BsFillTelephoneFill, BsMusicNoteBeamed, BsEnvelopeOpenFill } from "react-icons/bs";
import { SiYourtraveldottv } from "react-icons/si";
import { MdLocalMovies, MdPhotoCamera } from "react-icons/md";
import { sender } from '../../Store';

const About = () => {

  let info = [
    {
      id: 1,
      icon: <BsFillPersonFill />,
      title: "Name",
      data: "Kanchan Arun Nikode"
    },
    {
      id: 2,
      icon: <BsFillTelephoneFill />,
      title: "Phone",
      data: "9158073594"
    },
    {
      id: 3,
      icon: <BsEnvelopeOpenFill />,
      title: "Email",
      data: "kanchnnikode1995@gmail.com"
    }
  ]
  let interest = [
    {
      id: 1,
      icon: <BsMusicNoteBeamed />,
      title: "Music"
    },
    {
      id: 2,
      icon: <SiYourtraveldottv />,
      title: "Travel"
    },
    {
      id: 3,
      icon: <MdLocalMovies />,
      title: "Movies"
    },
    {
      id: 4,
      icon: <MdPhotoCamera />,
      title: "Photo"
    }
  ]

  let { mode, setMode } = useContext(sender)


  return (
    <>
      <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'}`} id='about'>
        <Heading title="About Me" description="Know About Me" size="75px" />
        <div className="row align-items-center about">
          <div className="col-4">
            <img src="images/about/pexels-djordje-petrovic-2102415.jpg" width="100%" height='550px' alt="" />
          </div>
          <div className="col-8">
            <h1>My Intro</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem adipisci voluptatum soluta sequi ducimus non inventore maiores voluptas cum, distinctio dignissimos rerum. Voluptatibus aliquid natus enim unde dolor libero aspernatur, quisquam nobis molestias? Tenetur eligendi nam dolorem vel, tempora neque cupiditate nisi magnam ullam aspernatur. Numquam mollitia optio libero veniam.</p>
            <table>
              {
                info.map((e) => {
                  return (
                    <tbody>
                      <tr>
                        <td className='pe-2 fs-4'>{e.icon}</td>
                        <td className='pe-5'>{e.title}</td>
                        <td className='fs-5'>{e.data}</td>
                      </tr>
                    </tbody>
                  )
                })
              }
            </table>

            <h4 className='mt-5'>My Interest</h4>
            {
              interest.map((e) => {
                return (
                  <label htmlFor="">{e.icon}&nbsp; {e.title}&emsp;</label>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default About