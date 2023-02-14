class Swiper {
    render() {
        const html = `
               <div class="swiper__title title">
                   <span class="title">Meet Our Awesome Team</span>
               </div>
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
        ROOT_SWIPER.innerHTML = html
    }

}

const swiper = new Swiper()