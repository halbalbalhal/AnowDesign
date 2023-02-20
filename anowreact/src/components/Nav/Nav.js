import React from 'react'
import './Nav.css'
import '../BurgerMenu/Burger'

class Nav extends React.Component {

    constructor(props) {
        super(props);
        this.showBurger = this.showBurger.bind(this)
    }
    showBurger() {
        const burger = document.querySelector('.burger__menu')
        burger.style.display = 'flex'
        const burgerButton = document.querySelector('.nav__burger')
        burgerButton.style.display = 'none'
    }

    render() {
        return (
            <nav className="nav">
                <div className="nav__wrapper">
                    <span className="nav__title">ANOW</span>
                    <div className="nav__menu">
                        <a className="nav__link" href="#">demos</a>
                        <a className="nav__link" href="#">about us</a>
                        <a className="nav__link" href="#">portfolio</a>
                        <a className="nav__link" href="#">team</a>
                        <a className="nav__link" href="#">news</a>
                        <a className="nav__link" href="#">contact</a>
                        <a className="nav__link" href="#">other pages</a>
                    </div>

                    <div className="nav__burger" onClick={this.showBurger}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav