import React from 'react'
import { FaCode } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiCodechef } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";

const Profiles = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 w-full" id='profiles'>
      <div className='flex items-center justify-center '>
        <h2 className="my-10 text-center text-4xl">Coding 
        <span className="text-blue-400" > Profiles</span>
        </h2>
        <span className='text-4xl mx-2'><FaCode className='text-blue-400'/></span>
      </div>

      <div className="flex flex-col items-center justify-center bg:white text-2xl w-full">

        <a href="https://leetcode.com/u/abhinay_vollala/"><div className='flex justify-center items-center mb-3'> <SiLeetcode className='mr-2' /><h6>LeetCode</h6> </div></a>
        <a href="https://www.codechef.com/users/abhinay_v"><div className='flex justify-center items-center mb-3'> <SiCodechef className='mr-2' /><h6>CodeChef</h6> </div></a>
        <a href="https://codeforces.com/profile/abhinay.vollala"><div className='flex justify-center items-center mb-3'> <SiCodeforces className='mr-2' /><h6>CodeForces</h6> </div></a>
      </div>
    </div>
  )
}

export default Profiles