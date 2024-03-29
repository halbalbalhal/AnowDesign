class Swiper {
    render() {
        const html = `
            <section class="swiper__title title" id="team_swiper">
                   <span class="title">Meet Our Awesome Team</span>
                   <span class="text scroll__text"><- Swipe zone -></span>
            </section>
            <swiper-container class="swiper__wrapper">
              <swiper-slide class="swiper__block">
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>                                                             
              </swiper-slide>
              
              <swiper-slide class="swiper__block">
                        <div class="team__members-block member__andy">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide class="swiper__block">
                        <div class="team__members-block member__katy">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide class="swiper__block">
                        <div class="team__members-block member__margo">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide class="swiper__block">
                        <div class="team__members-block member__kanye">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide class="swiper__block">
                        <div class="team__members-block member__marta">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>              
            </swiper-container>
        `
        ROOT_SWIPERTEAM.innerHTML = html
    }

}

const swiperteam = new Swiper()