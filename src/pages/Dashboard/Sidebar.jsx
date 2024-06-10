import { useState } from "react";

import { AiOutlineBars } from "react-icons/ai";
import { Link } from "react-router-dom";
import CommonNvalink from "../../components/Shared/Navbar/CommonNvalink";
import useAuth from "../../hooks/useAuth";

const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { user } = useAuth()

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }

    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Link to='/' className='text-xl font-bold'>BD Newspaper</Link>
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-gray-900 mx-auto'>
                            <Link to='/dashboard' className='text-xl font-bold text-white'>BD Newspaper</Link>
                        </div>
                    </div>
                    <div className="flex flex-col mt-2">
                        <CommonNvalink destination={"/dashboard/all-users"} pagename={"All Users"} ></CommonNvalink>
                        <CommonNvalink destination={"/dashboard/all-article"} pagename={"All Article"} ></CommonNvalink>
                        <CommonNvalink destination={"/dashboard/add-publisher"} pagename={"Add Publisher"} ></CommonNvalink>
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <hr className=" border-[1px] border-gray-500" />
                    <CommonNvalink destination={"/"} pagename={"Home"} ></CommonNvalink>
                    <CommonNvalink destination={"/add-article"} pagename={"Add Article"} ></CommonNvalink>
                    <CommonNvalink destination={"/all-articles"} pagename={"All Articles"} ></CommonNvalink>
                    <CommonNvalink destination={"/my-article"} pagename={"My Article"} ></CommonNvalink>
                    <div className="flex -gap-2">
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className=' object-cover rounded-full h-8 w-8 '
                        />
                        <CommonNvalink
                            destination={'/upadte-profile'}
                            pagename={"Update Profile"}
                        >
                            Upadte Profile
                        </CommonNvalink>

                    </div>
                </div>

            </div>
        </>
    );
};

export default Sidebar;