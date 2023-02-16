class Burger {
    close() {
        ROOT_BURGER.innerHTML = ''
        const burgerMenu = document.querySelector('.nav__burger')
        const nav = document.querySelector('.nav')
        burgerMenu.style.display = 'flex'
        nav.style.display = 'flex'
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                burgerMenu.style.display = 'none'
            }
        })
        window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 1299px)").matches) {
                burgerMenu.style.display = 'flex'
            }
        })

    }

    render() {
        const html = `
            <div class="burger__menu">
                <div class="burger__container">
                    <img src="images/cross.png" onclick="burger.close()" class="burger__close-button">
                    <span class="nav__title burger__title">MENU</span>
                    <a class="burger__text" href="#">demos</a>
                    <a class="burger__text" href="#">about us</a>
                    <a class="burger__text" href="#">portfolio</a>
                    <a class="burger__text" href="#">team</a>
                    <a class="burger__text" href="#">news</a>
                    <a class="burger__text" href="#">contact</a>
                    <a class="burger__text" href="#">other pages</a> 
                </div>
                <div class="burger__active">

                </div>
            </div>
        `

        ROOT_BURGER.innerHTML = html
    }
}


const burger = new Burger()