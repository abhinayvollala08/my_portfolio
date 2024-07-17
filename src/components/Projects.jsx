import { PROJECTS } from "../constants"
import { GoProjectSymlink } from "react-icons/go";

const Projects = () => {
    return <div className="border-b border-neutral-900 pb-4" id="projects">
        <div className='flex items-center justify-center '>
            <h2 className="my-10 text-center text-4xl">Projects
            </h2>
            <span className='text-4xl mx-2'><GoProjectSymlink className="text-blue-400" /></span>
        </div>

        <div>
            {PROJECTS.map((project, index) => (

                <div key={index} className="mb-8 flex flex-row lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <img src={project.image} width={150} height={150} alt={project.title} className="mb-6 rounded" />

                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className="mb-2 font-semibold">{project.title}</h6>
                        <p className="mb-4 text-neutral-400">{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-700">{tech}</span>
                        ))}
                        <div>
                            <div class="inline-flex">
                                <button class="bg-neutral-900 hover:bg-purple hover:shadow-[0px_0px_12px_1px_#b794f4] text-white-800 py-1 px-2 rounded mt-2 mx-2 border border-gray-600">
                                    View Code
                                </button>
                                
                                <button class="bg-neutral-900 hover:bg-purple hover:shadow-[0px_0px_12px_1px_#b794f4] text-white-800  py-1 px-4 rounded mt-2 mx-2 border border-gray-600 ">
                                    Host Link
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
            ))}
        </div>
    </div>
}

export default Projects