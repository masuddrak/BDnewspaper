import { Helmet } from 'react-helmet-async'
import PremiumSection from '../../components/PremiumSection/PremiumSection'
import UserCalculation from '../../components/UserCalculation/UserCalculation'
import ArticlesSlider from '../../components/Sliders/ArticlesSlider'
import Publishers from '../../components/Publishers/Publishers'
import LeftSide from './LeftSide'
import RightSide from './RightSide'


const Home = () => {
  return (
    <div className=''>
      <Helmet>
        <title>BD Newspaper | Bangladesh Bigets News</title>
      </Helmet>
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
      {/* publisher */}
      <Publishers></Publishers>
      <UserCalculation></UserCalculation>
      <PremiumSection></PremiumSection>
    </div>
  )
}

export default Home
