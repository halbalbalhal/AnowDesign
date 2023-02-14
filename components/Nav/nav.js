class Nav {

    showBurger() {
        burger.render()
        const a = document.querySelector('.nav__burger')
        const nav = document.querySelector('.nav')
        a.style.display = 'none'
        nav.style.display = 'none'
    }

    render() {
        const html = `
            <nav class="nav">
            <div class="nav__wrapper">
                <span class="nav__title">ANOW</span>
                <div class="nav__menu">
                    <a class="nav__link" href="#">demos</a>
                    <a class="nav__link" href="#">about us</a>
                    <a class="nav__link" href="#">portfolio</a>
                    <a class="nav__link" href="#">team</a>
                    <a class="nav__link" href="#">news</a>
                    <a class="nav__link" href="#">contact</a>
                    <a class="nav__link" href="#">other pages</a>                    
                </div>

                <div class="nav__burger" onclick="nav.showBurger()">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </nav>

        `

        ROOT_NAV.innerHTML = html
    }
}

const nav = new Nav()



