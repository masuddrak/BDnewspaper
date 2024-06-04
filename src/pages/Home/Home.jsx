import { Helmet } from 'react-helmet-async'
import PremiumSection from '../../components/PremiumSection/PremiumSection'


const Home = () => {
  return (
    <div className='w-5/6 mx-auto'>
      <Helmet>
        <title>BD Newspaper | Bangladesh Bigets News</title>
      </Helmet>
      <PremiumSection></PremiumSection>
    </div>
  )
}

export default Home
