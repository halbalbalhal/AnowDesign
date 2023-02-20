import React from "react";
import './Footer.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__main">
                    <div className="footer__main-number">
                        <span className="title footer__title">anow</span>
                        <p className="text">+ (0712) 819 79 555 | M: info@example.com</p>
                    </div>

                    <div className="footer__block">
                        <span className="little__title footer__title">Home</span>
                        <a href="#" className="text footer__link">Home Portfolio</a>
                        <a href="#" className="text footer__link">Home Agency</a>
                        <a href="#" className="text footer__link">Home Architecture</a>
                    </div>

                    <div className="footer__block">
                        <span className="little__title footer__title">Portfolio</span>
                        <a href="#" className="text footer__link">Masonry Portfolio</a>
                        <a href="#" className="text footer__link">Grid Portfolio</a>
                        <a href="#" className="text footer__link">Metro Portfolio</a>
                        <a href="#" className="text footer__link">Service Details</a>
                    </div>

                    <div className="footer__block">
                        <span className="little__title footer__title">Blog</span>
                        <a href="#" className="text footer__link">Blog Style 1</a>
                        <a href="#" className="text footer__link">Blog Style 2</a>
                        <a href="#" className="text footer__link">Blog Style 3</a>
                        <a href="#" className="text footer__link">Licensing</a>
                    </div>
                </div>
                <p className="text footer__afterwords">© Anow. All Rights Reserved 2022 — Designed by 128.digital.
                    Powered by Webflow</p>
            </footer>
        )
    }
}

export default Footer