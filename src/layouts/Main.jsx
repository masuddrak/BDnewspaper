import { Outlet } from 'react-router-dom'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
const Main = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-24 min-h-[calc(100vh-68px)] container mx-auto'>
        <div className='mx-1 md:mx-0'>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Main
