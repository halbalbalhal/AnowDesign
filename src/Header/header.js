class Header {

    render() {
        const html = `
            <!-- header -->
            <header class="header" id="home">
                <img src="images/Circle.svg" class="header__picture-circle">
                <img src="images/halfcircle.svg" alt="" class="header__picture-halfcircle">
                <h1 class="header__title">DESIGN IS THINKING MADE VISUAL</h1>
                <div class="header__buttons">
                    <button class="button button__animation-faster">Start now</button>
                    <button class="header__button button__animation-slowler">See more</button>
                </div>
                <img src="images/cross.svg" alt="" class="header__picture-cross">
                <img src="images/bottomcricle.svg" alt="" class="header__picture-bottomcircle">
            </header>
        `

        ROOT_HEADER.innerHTML = html
    }

}

const header = new Header()