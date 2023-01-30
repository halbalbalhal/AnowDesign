class Testimonials {
    render() {
        const html = `
            <!-- testimonials -->
            <section class="testimonials">
                <span class="huge__title testimonials__title">testimonials</span>
                <p>What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design. What is your attitude as a small town businessman when it comes to advertising or taking help of an advertising design.</p>
                <div class="testimonials__ceo">
                    <img src="images/sophie.svg">
                    <div class="ceo__text">
                        <p class="text">Sophie Nguyen</p>
                        <p>CEO</p>
                    </div>
                </div>
            </section>
        `

        ROOT_TESTIMONIALS.innerHTML = html
    }
}

const testimonials = new Testimonials()