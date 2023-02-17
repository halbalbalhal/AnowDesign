class Portfolio {
    render() {
        const html = `
            <!-- portlofio -->
            <section class="portfolio">
                <div class="little__portfolio">
                    <div class="little__block">
                        <div class="little__block-text">
                            <span class="news__title">Crazy Max</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" class="little__block-form">
                            </form>
                        </div>
                    </div>
                    <div class="little__block little__block-stylish">
                        <div class="little__block-text">
                            <span class="news__title">Stylish House</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" class="little__block-form">
                            </form>
                        </div>
                    </div>
                </div>

                <div class="huge__block">
                    <div class="huge__block-text">
                        <span class="news__title">Oblique your house</span>
                        <form>
                            <input type="checkbox" name="a" value="1417" class="little__block-form">
                        </form>
                    </div>
                </div>

                <div class="little__portfolio">
                    <div class="little__block little__block-difference">
                        <div class="little__block-text">
                            <span class="news__title">Differences</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" class="little__block-form">
                            </form>
                        </div>
                    </div>

                    <div class="little__block">
                        <div class="little__block-text">
                            <span class="news__title">Bag</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" class="little__block-form">
                            </form>
                        </div>
                    </div>
                </div>         
            </section>
        `

        ROOT_PORTFOLIO.innerHTML = html
    }
}

const portfolio = new Portfolio()