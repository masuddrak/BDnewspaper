import { Helmet } from 'react-helmet-async'
import PremiumSection from '../../components/PremiumSection/PremiumSection'
import UserCalculation from '../../components/UserCalculation/UserCalculation'
import ArticlesSlider from '../../components/Sliders/ArticlesSlider'
import Publishers from '../../components/Publishers/Publishers'
import LeftSide from './LeftSide'
import RightSide from './RightSide'
import OnlyBdNewspare from './OnlyBdNewspare'
import Travel from './Travel'
import SubscriptionModal from '../../components/Shared/Modal/SubscriptionModal'
import { useState } from 'react'


const Home = () => {
  const [isOpen,setIsOpen]=useState(true)
  const closeModal=()=>{
    setIsOpen(false)
  }
  return (
    <div className=''>
      <Helmet>
        <title>BD Newspaper | Bangladesh Bigets News</title>
      </Helmet>

      {/* suscriptin modal */}
      <SubscriptionModal closeModal={closeModal} isOpen={isOpen}></SubscriptionModal>
      <div className='md:grid grid-cols-4 gap-4'>
        <div>
          <LeftSide></LeftSide>
        </div>
        <div className='col-span-2'>
          <ArticlesSlider></ArticlesSlider>
        </div>
        <div>
          <RightSide></RightSide>
        </div>
      </div>
      {/* only bbc section */}
      <div>
        <OnlyBdNewspare></OnlyBdNewspare>
      </div>
     
      <UserCalculation></UserCalculation>
      {/* travel */}
      <Travel></Travel>
       {/* publisher */}
       <Publishers></Publishers>
      <PremiumSection></PremiumSection>
    </div>
  )
}

export default Home
