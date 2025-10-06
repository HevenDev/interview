import { GoHomeFill } from "react-icons/go";
import { CgFileDocument } from "react-icons/cg";
import { LuUsersRound } from "react-icons/lu";
import { IoNotificationsOutline, IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    return (
        <>


            <nav className="bg-white  fixed w-full z-20 top-0 start-0">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="logo.png" className="h-10" alt="Logo" />

                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <div className="lg:pr-[12vw] 2xl:pr-16 pr-2 flex items-center gap-4">
                            <div className="flex relative ">
                                <IoSearchOutline className="text-zinc-900 absolute left-2 top-1/2 -translate-y-1/2" size={20} />
                                <input type="text" className="bg-[#f6f8f2] rounded-sm px-2 py-1 w-32 sm:w-48" />

                            </div>
                            <button className="text-zinc-900 relative"><IoNotificationsOutline size={20} />
                                <span className="text-xs font-semibold absolute top-0.5 right-0.5 border border-white bg-red-500 text-white rounded-full p-0.75"></span>
                            </button>
                            <div className="w-9 h-9 rounded-full bg-[#edf1e5] flex items-center justify-center">
                                <span className="text-black text-xs font-semibold">BJ</span>
                            </div>
                        </div>


                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center text-sm justify-between hidden w-full lg:flex lg:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                            <li className="flex gap-2 items-center bg-[#f6f8f2] px-4 py-2 rounded-md">
                                <GoHomeFill className="text-[#4b7600]" size={20} />
                                <a href="#" className="block py-2 px-3 text-white bg-[#4b7600] rounded-sm md:bg-transparent md:text-[#4b7600] md:p-0 " aria-current="page">Home</a>
                            </li>
                            <li className="flex gap-2 items-center text-zinc-900">
                                <CgFileDocument size={20} />
                                <a href="#" className="">Applications</a>
                            </li>
                            <li className="flex gap-2 items-center text-zinc-900">
                                <LuUsersRound size={20} />
                                <a href="#" className="">Supplements</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar;