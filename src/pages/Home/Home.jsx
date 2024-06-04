import { Helmet } from 'react-helmet-async'
import PremiumSection from '../../components/PremiumSection/PremiumSection'
import UserCalculation from '../../components/UserCalculation/UserCalculation'
import ArticlesSlider from '../../components/Sliders/ArticlesSlider'


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
      <UserCalculation></UserCalculation>
      <PremiumSection></PremiumSection>
    </div>
  )
}

export default Home
