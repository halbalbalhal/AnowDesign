class Burger {
    close() {
        ROOT_BURGER.innerHTML = ''
        const burgerMenu = document.querySelector('.nav__burger')
        const nav = document.querySelector('.nav')

        burgerMenu.style.display = 'flex'
        nav.style.display = 'flex'

        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 1300px)").matches) {
                burgerMenu.style.display = 'none'
            } else {
                burgerMenu.style.display = 'flex'
            }
        })
    }

    render() {
        const html = `
            <section class="burger__menu">
                <div class="burger__container" id="burger__container">
                    <img src="images/cross.png" onclick="burger.close()" class="burger__close-button">
                    <a class="burger__text" href="#benefits" onclick="burger.close()">demos</a>
                    <a class="burger__text" href="#works" onclick="burger.close()">portfolio</a>
                    <a class="burger__text" href="#team" onclick="burger.close()">team</a>
                    <a class="burger__text" href="#news" onclick="burger.close()">news</a>
                    <a class="burger__text" href="#contacts" onclick="burger.close()">contact</a>
                </div>
                <div class="burger__active">

                </div>
            </section>
        `

        ROOT_BURGER.innerHTML = html
    }
}


const burger = new Burger()