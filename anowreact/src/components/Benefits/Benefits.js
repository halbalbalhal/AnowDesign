import React from 'react'
import './Benefits.css'

class Benefits extends React.Component {
    render() {
        return (
            <section className="benefits" id="benefits">
                <div className="benefits__wrapper">
                    <div className="benefits__block">
                        <img src="images/lamp.png" alt="" className="benefits__img" />
                            <span className="title">digital solutions</span>
                            <p className="text">If you need to redesign your new project, new visual strategy, ux
                                structure, or you do have some cool ideas for collaboration</p>
                    </div>

                    <div className="benefits__block">
                        <img src="images/strategy.png" alt="" className="benefits__img" />
                            <span className="title">creative strategy</span>
                            <p className="text">If you need to redesign your new project, new visual strategy, ux
                                structure, or you do have some cool ideas for collaboration</p>
                    </div>

                    <div className="benefits__block">
                        <img src="images/speed.png" alt="" className="benefits__img" />
                            <span className="title">integrated marketing</span>
                            <p className="text">If you need to redesign your new project, new visual strategy, ux
                                structure, or you do have some cool ideas for collaboration</p>
                    </div>
                </div>
            </section>
        )
    }
}

export default Benefits