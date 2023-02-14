class Swiper {
    render() {
        const html = `
            <span class="title">Meet Our Awesome Team</span>
            <swiper-container class="swiper__wrapper">
              <swiper-slide class="swiper__block">
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>                                                             
              </swiper-slide>
              
              <swiper-slide>
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide>
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
              
              <swiper-slide>
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>               
              </swiper-slide>
            </swiper-container>
        `
        ROOT_SWIPER.innerHTML = html
    }

}

const swiper = new Swiper()