import React from 'react'
import './About.css'

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="about__info">
                    <span className="huge__title" id="about">about</span>
                    <span className="title about__title">Ultimate experiences</span>
                    <span className="title about__title">with story, emotion and purpose</span>
                    <img src="images/interior.svg" alt="" className="about__info-img" />
                </div>

                <div className="about__quote">
                    <div className="about__quote-info">
                        <span className="little__title about__quote-title">Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipiscing. Aliquam class bibendum</span>
                        <p className="text">Quisque. Maecenas. Eros mus. Hymenaeos eros. Nisi mauris et adipisc iquam
                            class bibendum non mattis fusceut perspiciatis undeuisque. Maecenas. Eros mus. Hymenaeos
                            eros. Nisi mauris et adipiscing. Aliquam class bibendum mattis fusceut persecenas. Eros
                            mus</p>
                    </div>
                    <p className="about__quote-text">“ Our mission is to produce the <span
                        className="about__quote-color"> highest quality</span> of work for every client, on every
                        project with full of energy we have ”</p>
                    <div className="about__quote-author">
                        <span className="little__title">Frankie Kao</span>
                        <span className="text">ART DIRECTOR PAO</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default About