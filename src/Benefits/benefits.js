class Benefits {
    render() {
        const html = `
            <section class="benefits" id="benefits">
                <div class="benefits__wrapper">
                    <div class="benefits__block">
                        <img src="images/lamp.png" alt="" class="benefits__img">
                        <span class="title">digital solutions</span>
                        <p class="text">If you need to redesign your new project, new visual strategy, ux structure, or you do have some cool ideas for collaboration</p>
                    </div>

                    <div class="benefits__block">
                        <img src="images/strategy.png" alt="" class="benefits__img">
                        <span class="title">creative strategy</span>
                        <p class="text">If you need to redesign your new project, new visual strategy, ux structure, or you do have some cool ideas for collaboration</p>
                    </div>

                    <div class="benefits__block">
                        <img src="images/speed.png" alt="" class="benefits__img">
                        <span class="title">integrated marketing</span>
                        <p class="text">If you need to redesign your new project, new visual strategy, ux structure, or you do have some cool ideas for collaboration</p>
                    </div>
                </div>
            </section>
        `

        ROOT_BENEFITS.innerHTML = html
    }
}

const benefits = new Benefits()