class Swiper {
    render() {
        const html = `
            <swiper-container>
              <swiper-slide class="swiper-block">
                        <div class="team__members-block">
                            <span class="team__members-title">Anna Brown</span>
                            <span class="team__members-text">Creative Director</span>
                        </div>                                                             
              </swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide ...</swiper-slide>
            </swiper-container>
        `
        ROOT_SWIPER.innerHTML = html
    }

}

const swiper = new Swiper()