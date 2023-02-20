class News {
    render() {
        const html = `
            <!-- news -->
            <section class="news">
                <span class="title team__title">Our Interactive News</span>
                <div class="news__wrapper">
                    <div class="news__block">
                        <img src="images/mounts.svg" alt="">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">insights from interviewing the community</span>
                        <span class="news__link">view more</span>
                    </div>

                    <div class="news__block">
                        <img src="images/girl.svg" alt="">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">excelent company and opportunities</span>
                        <span class="news__link">view more</span>
                    </div>

                    <div class="news__block">
                        <img src="images/bike.svg" alt="">
                        <div class="news__block-filters">
                            <span class="news__link">lifestyle</span>
                            <span class="news__link">design</span>
                            <span class="text">March 11, 2022</span>
                        </div>
                        <span class="news__title">ways to increase your website</span>
                        <span class="news__link">view more</span>
                    </div>
                </div>
            </section>
        `

        ROOT_NEWS.innerHTML = html
    }

}

const news = new News()