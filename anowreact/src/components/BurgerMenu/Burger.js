import React from "react";
import './Burger.css'

class burgerMenu extends React.Component {

    constructor(props) {
        super(props);
        this.close = this.close.bind(this)
    }
    close() {
        const burgerMenu = document.querySelector('.burger__menu')
        burgerMenu.style.display = 'none'

        const burgerButton = document.querySelector('.nav__burger')
        burgerButton.style.display = 'flex'

        window.addEventListener("resize", function() {
            if (window.matchMedia("(min-width: 1300px)").matches) {
                burgerButton.style.display = 'none'
            } else {
                burgerButton.style.display = 'flex'
            }
        })
    }

    render() {
        return (
            <section className="burger__menu">
                <div className="burger__container" id="burger__container">
                    <img src="images/cross.png" onClick={this.close} className="burger__close-button" />
                        <a className="burger__text" href="#benefits" onClick={this.close}>demos</a>
                        <a className="burger__text" href="#works" onClick={this.close}>portfolio</a>
                        <a className="burger__text" href="#team" onClick={this.close}>team</a>
                        <a className="burger__text" href="#news" onClick={this.close}>news</a>
                        <a className="burger__text" href="#contacts" onClick={this.close}>contact</a>
                </div>
                <div className="burger__active">

                </div>
            </section>
        )
    }
}

export default burgerMenu