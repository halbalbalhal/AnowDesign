import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Newsswiper.css";

// import required modules
import { Pagination } from "swiper";

class Swipernews extends React.Component {
    render() {
        return (
            <>
                <Swiper
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="news__block">
                            <img src="images/mounts.svg" />
                                <div className="news__block-filters">
                                    <span className="news__link">lifestyle</span>
                                    <span className="news__link">design</span>
                                    <span className="text">March 11, 2022</span>
                                </div>
                                <span className="news__title">insights from interviewing the community</span>
                                <span className="news__link">view more</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="news__block">
                            <img src="images/girl.svg" alt="" />
                                <div className="news__block-filters">
                                    <span className="news__link">lifestyle</span>
                                    <span className="news__link">design</span>
                                    <span className="text">March 11, 2022</span>
                                </div>
                                <span className="news__title">insights from interviewing the community</span>
                                <span className="news__link">view more</span>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="news__block">
                            <img src="images/bike.svg" alt="" />
                                <div className="news__block-filters">
                                    <span className="news__link">lifestyle</span>
                                    <span className="news__link">design</span>
                                    <span className="text">March 11, 2022</span>
                                </div>
                                <span className="news__title">insights from interviewing the community</span>
                                <span className="news__link">view more</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </>
        )
    }
}

export default Swipernews