import React from "react";
import './Skills.css'

class Skills extends React.Component {
    render() {
        return (
            <section className="skills">
                <div className="skills__wrapper">
                    <div className="skills__info">
                        <span className="title">modern digital creative agency</span>
                        <p className="text">If you need to redesign your new project, new visual strategy, ux structure
                            or you do have some cool ideas for collaboration</p>
                    </div>

                    <div className="skills__sliders">
                        <div className="skills__sliders-slider">
                            <div className="sliders__text">
                                <span className="registration__title">Illustration</span>
                                <p className="text">90%</p>
                            </div>
                            <div className="slider">
                                <div className="slider__gradient">

                                    <></>
                                </div>
                            </div>
                        </div>

                        <div className="skills__sliders-slider">
                            <div className="sliders__text sliders__text-design">
                                <span className="registration__title">Web Design</span>
                                <p className="text">80%</p>
                            </div>
                            <div className="slider">
                                <div className="slider__gradient-design slider__gradient">

                                    <></>
                                </div>
                            </div>
                        </div>

                        <div className="skills__sliders-slider">
                            <div className="sliders__text slider__text-development">
                                <span className="registration__title">Development</span>
                                <p className="text">95%</p>
                            </div>
                            <div className="slider">
                                <div className="slider__gradient slider__gradient-development">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}

export default Skills