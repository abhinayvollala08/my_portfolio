import { RiReactjsLine } from "react-icons/ri"
import { TbBrandCpp } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaLaptopCode } from "react-icons/fa";

const Myskills = () => {
  return <div className="border-b border-neutral-800 pb-24" id="technologies">
    <div className='flex items-center justify-center '>
      <h2 className="my-10 text-center text-4xl">My
        <span className="text-blue-400" > Skills</span>
      </h2>
      <span className='text-4xl mx-2'><FaLaptopCode className='text-blue-400' /></span>
    </div>


    <div className="grid grid-cols-3">

      <div className=" basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl  flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#cbd5e0] px-12 py-4  border border-t-0 border-white-400">
          <TbBrandCpp className="text-7xl text-white-400 " />
          <p className="text-center pl-1 mt-2">C++</p>
        </div>
      </div>
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#FFCC33] px-12 py-4 border border-t-0 border-amber-400">
          <FaJava className="text-7xl text-amber-400" />
          <p className="text-center pl-1 mt-2">Java</p>
        </div>
      </div>
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#63b3ed] px-12 py-4 border border-t-0 border-cyan-400">
          <RiReactjsLine className="text-7xl text-cyan-400" />
          <p className="text-center pl-1 mt-2">React</p>
        </div>
      </div>
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#ed8936] px-12 py-4 border border-t-0 border-orange-400">
          <FaHtml5 className="text-7xl text-orange-400" />
          <p className="text-center pl-1 mt-2">HTML</p>
        </div>
      </div>
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#4fd1c5] px-12 py-4 border border-t-0 border-teal-400">
          <SiMysql className="text-7xl text-teal-400" />
          <p className="text-center pl-1 mt-2">MySQL</p>
        </div>
      </div>
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#cbd5e0] px-12 py-4 border border-t-0 border-white-400">
          <FaGithub className="text-7xl text-white-400" />
          <p className="text-center pl-1 mt-2">Github</p>
        </div>
      </div>
      
      <div className="basis-1/12 gap-4 mx-16 my-8">
        <div className="rounded-2xl flex flex-col items-center justify-center hover:shadow-[0px_9px_13px_0px_#4299e1] px-12 py-4 border border-t-0 border-blue-400">
          <FaCss3Alt className="text-7xl text-blue-400" />
          <p className="text-center pl-1 mt-2">CSS</p>
        </div>
      </div>

    </div>

    {/* ------------------- BARR GRAPH ----------------
    <div class="mx-96 bg-gray p-8 shadow-slate-200 rounded-lg w-full md:w-2/3 lg:w-1/3">
  <div class="flex items-center justify-between">
  <span class=" text-sm text-white ">CPP</span>
  <span class="px-2 py-1 bg-gray rounded-lg text-xs text-white-400 font-medium min-w-[46px] text-center">80%</span>
  </div>

  <div class="w-full bg-slate-100 rounded h-2 mb-6 mt-2">
  <div class="bg-teal-400 h-2 rounded w-4/5" ></div>
  </div>

  <div class="flex items-center justify-between">
  <span class=" text-sm text-white">DS & ALGO</span>
  <span class="px-2 py-1 bg-gray rounded-lg text-xs text-white-400 font-medium min-w-[46px] text-center">70%</span>
  </div>

  <div class="w-full bg-slate-100 rounded h-2 mb-6 mt-2">
  <div class="bg-teal-400 h-2 rounded w-3/5" ></div>
  </div>

  <div class="flex items-center justify-between">
  <span class=" text-sm text-white">MY SQL</span>
  <span class="px-2 py-1 bg-gray rounded-lg text-xs text-white-400 font-medium min-w-[46px] text-center">80%</span>
  </div>

  <div class="w-full bg-slate-100 rounded h-2 mb-6 mt-2">
  <div class="bg-teal-400 h-2 rounded w-80" ></div>
  </div>

  <div class="flex items-center justify-between">
  <span class=" text-sm text-white">JAVA</span>
  <span class="px-2 py-1 bg-gray rounded-lg text-xs text-white-400 font-medium min-w-[46px] text-center">80%</span>
  </div>

  <div class="w-full bg-slate-100 rounded h-2 mb-6 mt-2">
  <div class="bg-teal-400 h-2 rounded w-80" ></div>
  </div>

  <div class="flex items-center justify-between">
  <span class=" text-sm text-white">WEB DEVELOPMENT</span>
  <span class="px-2 py-1 bg-gray rounded-lg text-xs text-white-200 font-medium min-w-[46px] text-center">80%</span>
  </div>

  <div class="w-full bg-slate-100 rounded h-2 mb-6 mt-2">
  <div class="bg-teal-400 h-2 rounded w-80" ></div>
  </div>
</div> */}
  </div>
}

export default Myskills