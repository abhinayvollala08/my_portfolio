import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Hero = () => {
    return <div className="mt-24 bodex-b boder-neutral-900 pb-4 lg:mb-35" id="hero">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <h1 className="pb-5 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">Abhinay.Vollala</h1>
                    <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent" >Student</span>
                    <div className="my-2 flex flex-start gap-4 ">
                        <a href="https://www.linkedin.com/in/abhinayvollala/"><FaLinkedin className="text-2xl  hover:text-blue-400" /></a>
                        <a href="https://github.com/abhinayvollala08"><FaGithub className="text-2xl hover:text-gray-100" /></a>
                        <a href="https://www.instagram.com/abhinay.vollala/"><FaInstagram className="text-2xl hover:text-pink-400 " /></a>
                        <a href="https://x.com/VollalaAbhinay"><FaSquareXTwitter className="text-2xl  hover:text-gray-600" /></a>
                    </div>
                    <p className="my-2 max-w-xl py-6 font-light tracking-tighter">{HERO_CONTENT}</p>
                    <button class="bg-gradient-to-tr from-cyan-400 to-purple-400 hover:shadow-[0px_0px_33px_1px_#a3bffa] text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                        <a href="blob:https://github.com/1bf68edd-a49a-4eea-988b-6e3258e64e6e"><span>Resume</span></a>
                    </button>
                </div>

            </div>
            <div className="w-full lg:w-1/2 lg:p-8 ">
                <div className="flex justify-center">
                    <img src={profilePic} alt="Abhinay Vollala" />
                </div>
            </div>
        </div>
    </div>
}



export default Hero