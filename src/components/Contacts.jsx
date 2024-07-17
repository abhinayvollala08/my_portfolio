import { CONTACT } from "../constants"

const Contacts = () => {
    return (<div className="border-b border-neutral-900 pb-20" id="contacts">
        <h2 className="my-10 text-center text-4xl">Get in Touch</h2>
        <p className="text-center pb-5">Submit the form to contact me</p>
        {/* <div className="text-center tracking-tighter"></div> */}
        <div className="flex justify-center items-center ">
            <form action="https://getform.io/f/aolggwmb" method="post" className="mx-16 my-5 md:w-1/2 " >
                <div className=" grid md:grid-cols-2 mb-4 gap-6">
                    <div className="">
                        <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                    </div>
                    <div className="">
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                    </div>
                </div>
                <div className="">
                    <div className="">
                        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                        <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    </div>
                    <button type="submit" class="px-5 py-2.5 mt-4 text-sm font-medium text-center text-black bg-gradient-to-tr from-cyan-400 to-purple-400 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Send
                    </button>
                </div>
            </form>
        </div>


    </div>)
}

export default Contacts

