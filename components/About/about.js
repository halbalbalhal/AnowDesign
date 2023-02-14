class About {
    render() {
        const html = `
            <!-- about -->
            <section class="about">
                <div class="about__info">
                    <span class="huge__title">about</span>
                    <span class="title about__title">Ultimate experiences</span>
                    <span class="title about__title">with story, emotion and purpose</span>
                    <img src="images/interior.svg" alt="" class="about__info-img">
                </div>

                <div class="about__quote">
                    <div class="about__quote-info">
                        <span class="little__title about__quote-title">Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum</span>
                        <p class="text">Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros mus</p>
                    </div>
                    <p class="about__quote-text">“ Our mission is to produce the <span class="about__quote-color"> highest quality</span>work for every client, on every project with full of energy we have ”</p>
                    <div class="about__quote-author">
                        <span class="little__title">Frankie Kao</span>
                        <span class="text">ART DIRECTOR PAO</span>
                    </div>
                </div>
            </section>
        `
        ROOT_ABOUT.innerHTML = html
    }
}

const about = new About()