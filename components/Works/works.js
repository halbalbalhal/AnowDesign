class Works {
    render() {
        const html = `
            <section class="works">
                <div class="works__wrapper">
                    <div class="works__block">
                        <span class="title works__text">Take a look around our portfolio</span>
                        <button class="button">View more</button>
                    </div>
                    <span class="huge__title works__title">works</span>
                </div>
            </section>
        `

        ROOT_WORKS.innerHTML = html
    }

}

const works = new Works()