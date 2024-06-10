import Container from '../Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

import CommonNvalink from './CommonNvalink'

const Navbar = () => {
  const { user, logOut } = useAuth()
  const [isOpen, setIsOpen] = useState(false)
  const navlinks = <>
    <CommonNvalink destination={"/"} pagename={"Home"} ></CommonNvalink>
    <CommonNvalink destination={"/add-article"} pagename={"Add Article"} ></CommonNvalink>
    <CommonNvalink destination={"/all-articles"} pagename={"All Articles"} ></CommonNvalink>
    <CommonNvalink destination={"/my-article"} pagename={"My Article"} ></CommonNvalink>
    <CommonNvalink destination={"/subscription"} pagename={"Subscription"} ></CommonNvalink>
    <CommonNvalink destination={"/premium-articles"} pagename={"Premium Articles"} ></CommonNvalink>
  </>
  return (
    <div className='fixed w-full bg-white z-10 shadow-sm'>
      <div className='py-4 border-b-[1px]'>
        <Container>
          <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>
            {/* Logo */}
            <Link to='/' className='text-lg font-extrabold uppercase'>BD<span className='text-red-500'>News</span>paper</Link>
            <div className='hidden md:flex'>
              {navlinks}
            </div>
            {/* Dropdown Menu */}
            <div className='relative'>
              <div className='flex flex-row items-center gap-3'>
                {/* Become A Host btn */}
                <div className='hidden md:block'>

                </div>
                {/* Dropdown btn */}
                {user ? <div
                  onClick={() => setIsOpen(!isOpen)}
                  className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                  <AiOutlineMenu />
                  <div className='hidden md:block'>
                    {/* Avatar */}
                    <img
                      className='rounded-full'
                      referrerPolicy='no-referrer'
                      src={user && user.photoURL ? user.photoURL : ""}
                      alt='profile'
                      height='30'
                      width='30'
                    />
                  </div>
                </div> :
                  <div className='flex gap-3'>
                    <Link
                      to='/signup'
                      className='px-4 py-1 font-semibold bg-black text-white'
                    >
                      Sign Up
                    </Link>
                    <Link
                      to='/login'
                      className='px-4 py-1 font-semibold bg-black text-white'
                    >
                      Login
                    </Link>
                  </div>
                }
              </div>
              {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                  <div className='flex flex-col cursor-pointer'>

                    <div className='flex flex-col gap-1 md:hidden'>
                      {navlinks}
                    </div>

                    {user ? (
                      <>
                        <Link
                          to='/dashboard'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                         Admin Dashoard
                        </Link>
                        <Link
                          to='/upadte-profile'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Upadte Profile
                        </Link>
                        <div
                          onClick={logOut}
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                        >
                          Logout
                        </div>

                      </>
                    ) : (
                      <>
                        <Link
                          to='/login'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Login
                        </Link>
                        <Link
                          to='/signup'
                          className='px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                        >
                          Sign Up
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
