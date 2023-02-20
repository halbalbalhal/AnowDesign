import React from "react";
import './Portfolio.css'

class Portfolio extends React.Component {
    render() {
        return (
            <section className="portfolio">
                <div className="little__portfolio">
                    <div className="little__block">
                        <div className="little__block-text">
                            <span className="news__title">Crazy Max</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" className="little__block-form" />
                            </form>
                        </div>
                    </div>
                    <div className="little__block little__block-stylish">
                        <div className="little__block-text">
                            <span className="news__title">Stylish House</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" className="little__block-form" />
                            </form>
                        </div>
                    </div>
                </div>

                <div className="huge__block">
                    <div className="huge__block-text">
                        <span className="news__title">Oblique your house</span>
                        <form>
                            <input type="checkbox" name="a" value="1417" className="little__block-form" />
                        </form>
                    </div>
                </div>

                <div className="little__portfolio">
                    <div className="little__block little__block-difference">
                        <div className="little__block-text">
                            <span className="news__title">Differences</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" className="little__block-form" />
                            </form>
                        </div>
                    </div>

                    <div className="little__block">
                        <div className="little__block-text">
                            <span className="news__title">Bag</span>
                            <form>
                                <input type="checkbox" name="a" value="1417" className="little__block-form" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio