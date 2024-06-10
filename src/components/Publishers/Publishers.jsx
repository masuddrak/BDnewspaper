import useAllPubliser from "../../hooks/useAllPubliser";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



// import required modules
import { Pagination } from 'swiper/modules';
const Publishers = () => {
    const { publishers } = useAllPubliser()
    return (

        <div>
            <div className="hidden md:flex">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <div>
                        {
                            publishers.map(publisher => <SwiperSlide key={publisher._id}><div className="my-10 space-y-3">
                                <div style={{
                                    backgroundImage: `url(${publisher.iamge})`
                                }} className="h-[150px] w-[250px] bg-no-repeat  hover:opacity-85 transition-all bg-contain top-0">

                                </div>
                                <h3 className="card-title hover:underline  primary-text font-semibold">{publisher.name}</h3>
                            </div></SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
            <div className="md:hidden">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >

                    <div>
                        {
                            publishers.map(publisher => <SwiperSlide key={publisher._id}><div className="my-10 space-y-3">
                                <div style={{
                                    backgroundImage: `url(${publisher.iamge})`
                                }} className="h-[150px] w-[150px] bg-no-repeat  hover:opacity-85 transition-all bg-cover top-0">

                                </div>
                                <h3 className="card-title hover:underline  primary-text font-semibold">{publisher.name}</h3>
                            </div></SwiperSlide>)
                        }
                    </div>

                </Swiper>
            </div>
        </div>
    );
};

export default Publishers;