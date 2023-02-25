class swiperNews {
    render() {
        const html = `
            <div class="swiper__title title" id="news_swiper">
                <span class="title">Our Interactive News</span>
                <span class="text scroll__text"><- Swipe zone -></span>
            </div>
           <swiper-container class="swiper__wrapper">
              <swiper-slide class="swiper__block">
                   <div class="news__block">
                        <img src="images/mounts.svg">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">insights from interviewing the community</span>
                        <span class="news__link">view more</span>
                   </div>
              </swiper-slide>
              <swiper-slide class="swiper__block">
                    <div class="news__block">
                        <img src="images/girl.svg" alt="">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">insights from interviewing the community</span>
                        <span class="news__link">view more</span>
                    </div>                    
              </swiper-slide>
              <swiper-slide class="swiper__block">
                    <div class="news__block">
                        <img src="images/bike.svg" alt="">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">insights from interviewing the community</span>
                        <span class="news__link">view more</span>
                    </div>              
              </swiper-slide>
           </swiper-container> 
        `
        ROOT_SWIPERNEWS.innerHTML = html
    }
}

const swipernews = new swiperNews()
