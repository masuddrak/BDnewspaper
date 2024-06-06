import { Helmet } from 'react-helmet-async'
import PremiumSection from '../../components/PremiumSection/PremiumSection'
import UserCalculation from '../../components/UserCalculation/UserCalculation'
import ArticlesSlider from '../../components/Sliders/ArticlesSlider'
import Publishers from '../../components/Publishers/Publishers'


const Home = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <Helmet>
        <title>BD Newspaper | Bangladesh Bigets News</title>
      </Helmet>
      <div className='grid grid-cols-4'>
        <div></div>
        <div className='col-span-2'>
          <ArticlesSlider></ArticlesSlider>
        </div>
        <div></div>
      </div>
      {/* publisher */}
      <Publishers></Publishers>
      <UserCalculation></UserCalculation>
      <PremiumSection></PremiumSection>
    </div>
  )
}

export default Home
