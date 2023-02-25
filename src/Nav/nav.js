class Nav {

    showBurger() {
        burger.render()
        const burgerMenu = document.querySelector('.nav__burger')
        const nav = document.querySelector('.nav')
        burgerMenu.style.display = 'none'
        nav.style.display = 'none'
    }

    render() {
        const html = `
            <nav class="nav">
            <div class="nav__wrapper">
                <span class="nav__title">ANOW</span>
                <div class="nav__menu">
                    <a class="nav__link" href="#home">home</a>
                    <a class="nav__link" href="#about">about us</a>
                    <a class="nav__link" href="#portfolio">portfolio</a>
                    <a class="nav__link" href="#team">team</a>
                    <a class="nav__link" href="#news">news</a>
                    <a class="nav__link" href="#registration">contact</a>
                    <a class="nav__link" href="#footer">more info</a>                    
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



