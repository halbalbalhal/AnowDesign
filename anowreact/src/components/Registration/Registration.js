import React from 'react'
import './Registration.css'

class Reg extends React.Component {
    render() {
        return (
            <section className="registration" id="contacts">
                <div className="registration__wrapper">
                    <div className="registration__info">
                        <div className="regsitration__info-address">
                            <span className="text">adress</span>
                            <p className="registration__title">14 tottenham road,</p>
                            <span className="registration__title">london, england</span>
                        </div>

                        <div className="registration__info-mail">
                            <span className="text">Information</span>
                            <p className="registration__title">info@yourdomain.com</p>
                            <span className="registration__title">(+68) 12004509</span>
                        </div>
                    </div>

                    <div className="registration__inputs">
                        <div className="inputs-data">
                            <input type="text" className="input__little" placeholder="Your name" />
                            <input type="text" className="input__little" placeholder="Your email" />
                        </div>
                        <textarea cols="30" rows="10" className="input__big" placeholder="Your message"></textarea>
                    </div>
                    <button className="button">Send Message</button>
                </div>
            </section>
        )
    }
}

export default Reg