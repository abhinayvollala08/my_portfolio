import aboutImg from "../assets/about.jpg"
import { ABOUT_TEXT } from "../constants/index"
import { IoMdPerson } from "react-icons/io";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4" id="about">
      
      <div className='flex items-center justify-center '>
                <h2 className="my-10 text-center text-4xl">About
                    <span className="text-blue-400" > Me</span>
                </h2>
                <span className='text-4xl mx-2'><IoMdPerson className='text-blue-400' /></span>
            </div>

      <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <img className="rounded-2xl" src={aboutImg} alt="" />
            </div>
          </div>
        <div className="w-full lg:w-1/2 my-24 text-lg ">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About