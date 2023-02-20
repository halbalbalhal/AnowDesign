import React from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return(
            <section className="header">
                        <h1 className="header__title">DESIGN IS THINKING MADE VISUAL</h1>
                        <div className="header__buttons">
                            <button className="button button__animation-faster">Start now</button>
                            <button className="header__button button__animation-slowler">See more</button>
                        </div>
            </section>
         ) 
    }

}

export default Header