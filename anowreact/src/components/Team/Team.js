import React from "react";
import './Team.css'

class Team extends React.Component {
    render() {
        return (
            <section className="team">
                <div className="team__wrapper">                    
                    <span className="title team__title">Meet Our Awesome Team</span>
                    <div className="team__members ">
                        <div className="team__members-block ">
                            <span className="team__members-title">Anna Brown</span>
                            <span className="team__members-text">Creative Director</span>
                        </div>

                        <div className="team__members-block member__andy">
                            <span className="team__members-title">Andy Crown</span>
                            <span className="team__members-text">SEO manager</span>
                        </div>

                        <div className="team__members-block member__katy">
                            <span className="team__members-title">Katy Necker</span>
                            <span className="team__members-text">Designer</span>
                        </div>
                    </div>

                    <div className="team__members">
                        <div className="team__members-block member__margo">
                            <span className="team__members-title">Margo Kesslin</span>
                            <span className="team__members-text">Developer</span>
                        </div>

                        <div className="team__members-block member__kanye">
                            <span className="team__members-title">Kanye Jones</span>
                            <span className="team__members-text">Art Director</span>
                        </div>

                        <div className="team__members-block member__marta">
                            <span className="team__members-title">Marta White</span>
                            <span className="team__members-text">Tester</span>
                        </div>
                    </div>

                    <button className="button team__button">Start work</button>
                </div>
                
            </section>            
        )
    }
}

export default Team