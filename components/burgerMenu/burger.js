class Burger {
    close() {
        ROOT_BURGER.innerHTML = ''
        const a = document.querySelector('.nav__burger')
        a.style.display = 'flex'
        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 1000px)").matches) {
                a.style.display = 'none'
            }
        })
        window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 1299px)").matches) {
                a.style.display = 'flex'
            }
        })

    }

    render() {
        const html = `
            <div class="burger__menu">
                <div class="burger__container">
                    <span class="nav__title burger__title">MENU</span>
                    <a class="burger__text" href="#">demos</a>
                    <a class="burger__text" href="#">about us</a>
                    <a class="burger__text" href="#">portfolio</a>
                    <a class="burger__text" href="#">team</a>
                    <a class="burger__text" href="#">news</a>
                    <a class="burger__text" href="#">contact</a>
                    <a class="burger__text" href="#">other pages</a> 
                    <button class="button burger__button" onclick="burger.close()">CLOSE</button> 
                </div>
            </div>
        `

        ROOT_BURGER.innerHTML = html
    }
}


const burger= new Burger()