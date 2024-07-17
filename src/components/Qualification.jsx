import { QUALIFICATION } from "../constants"
import { IoMdSchool } from "react-icons/io";
const Qualification = () => {
    return (
        <div className="border-b border-neutral-900 pb-4" id="qualification">
            <div className='flex items-center justify-center '>
                <h2 className="my-10 text-center text-4xl">My
                    <span className="text-blue-400" > Qualification</span>
                </h2>
                <span className='text-4xl mx-2'><IoMdSchool className='text-blue-400' /></span>
            </div>
            <div >
                {QUALIFICATION.map((quallification, index) => (
                    <div key={index} className="mb-4 flex flex-wrap lg:justify-center">
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h4 className="mb-2 font-semibold text-2xl " >
                                {quallification.clg}
                            </h4>
                            <p className="mb-2 text-neutral-400">{quallification.description} -{" "}
                                <span className="text-sm text-purple-100">
                                    {quallification.gpa}
                                </span>
                            </p>
                            {/* {quallification.technologies.map((tech, index) => (
                                <span key={index} className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"> {tech}</span>
                            ))} */}
                        </div>
                        <div className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{quallification.year}</p>
                        </div>
                    </div>
                ))}</div>
        </div>
    )
}

export default Qualification