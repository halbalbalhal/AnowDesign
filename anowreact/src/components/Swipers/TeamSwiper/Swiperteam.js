import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Swiperteam.css";

// import required modules
import { Pagination } from "swiper";

class SwiperTeam extends React.Component {
    render() {
        return (
            <>
            <section className="swiper__title title" id="team">
               <span className="title">Meet Our Awesome Team</span>
            </section>
            <Swiper
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide className={"swiper__block"}>
                  <div className="team__members-block">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="team__members-block member__andy">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="team__members-block member__katy">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="team__members-block member__margo">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="team__members-block member__kanye">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                  <div className="team__members-block member__marta">
                      <span className="team__members-title">Anna Brown</span>
                      <span className="team__members-text">Creative Director</span>
                  </div>
              </SwiperSlide>
            </Swiper>
          </>
        )
    }
}

export default SwiperTeam