// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { IoEyeSharp } from 'react-icons/io5';
import useSlideArticles from '../../hooks/useSlideArticles';
import { RiLiveLine } from "react-icons/ri";


const ArticlesSlider = () => {
    const { allArticles } = useSlideArticles()
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    allArticles.map(article => <SwiperSlide key={article._id}>
                        <Link to={`/article-details/${article._id}`} className="card card-compact   bg-base-100 border-b-[1px]">
                            
                            <div style={{
                                backgroundImage: `url(${article.image})`
                            }} className="h-[400px] bg-no-repeat  hover:opacity-85 transition-all w-full bg-cover object-cover top-0">

                            </div>
                            <div className="card-body px-2">
                                <div className='text-2xl'>
                                    <h2 className="card-title hover:underline primary-text font-semibold">
                                        <div>
                                            <span className='text-red-600 flex items-center gap-1'> <RiLiveLine></RiLiveLine> LIVE </span>
                                        </div>
                                        {article.title}</h2>
                                </div>
                                <div className="my-4 text-gray-600 text-sm">{article.description ? article.description.length > 200 ? <div>
                                    {article.description.slice(0, 250)}..
                                    <a className=" underline text-black">Read More</a>
                                </div> : article.description : article.description}</div>
                                <div className="flex  gap-3 mb-3">
                                    <img src={article.image} alt="Shoes" className="h-[30px] hover:opacity-85 transition-all rounded-full w-[30px] object-fill" />
                                    <p className="text-gray-600 ">{new Date(article.date).toDateString()}</p>
                                    <p className="text-gray-600 flex items-center gap-1"><IoEyeSharp></IoEyeSharp>{article.viewCount}</p>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </>
    );
};

export default ArticlesSlider;