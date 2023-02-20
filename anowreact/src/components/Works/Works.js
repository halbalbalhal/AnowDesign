import React from 'react'
import './Works.css'

class Works extends React.Component {
    render() {
        return (
            <section className="works" id="works">
                <div className="works__wrapper">
                    <div className="works__block">
                        <span className="title works__text">Take a look around our portfolio</span>
                        <button className="button">View more</button>
                    </div>
                    <span className="huge__title works__title">works</span>
                </div>
            </section>
        )
    }
}

export default Works