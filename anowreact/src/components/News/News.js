import React from "react";
import './News.css'

class News extends React.Component {
    render() {
        return (
            <section className="news">
                <span className="title team__title">Our Interactive News</span>
                <div className="news__wrapper">
                    <div className="news__block">
                        <img src="images/mounts.svg" alt="" />
                            <div className="news__block-filters">
                                <span className="news__link">lifestyle</span>
                                <span className="news__link">design</span>
                                <span className="text">March 11, 2022</span>
                            </div>
                            <span className="news__title">insights from interviewing the community</span>
                            <span className="news__link">view more</span>
                    </div>

                    <div className="news__block">
                        <img src="images/girl.svg" alt="" />
                            <div className="news__block-filters">
                                <span className="news__link">lifestyle</span>
                                <span className="news__link">design</span>
                                <span className="text">March 11, 2022</span>
                            </div>
                            <span className="news__title">excelent company and opportunities</span>
                            <span className="news__link">view more</span>
                    </div>

                    <div className="news__block">
                        <img src="images/bike.svg" alt="" />
                            <div className="news__block-filters">
                                <span className="news__link">lifestyle</span>
                                <span className="news__link">design</span>
                                <span className="text">March 11, 2022</span>
                            </div>
                            <span className="news__title">ways to increase your website</span>
                            <span className="news__link">view more</span>
                    </div>
                </div>
            </section>
        )
    }
}

export default News