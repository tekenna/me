import React from 'react'
import "./projects.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Footer from "../../components/footer/Footer"

function Projects() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "linear"
      };
    return (
        <div className="project">
            <div className="pro_wrapper">
                <div className="project_card">
                    <Slider {...settings}>
                        <div className="img_card_wrap">
                            <img src="images/mulan1.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/mulan2.jpeg" alt="..." />
                        </div>
                    </Slider>
                    <div className="pro_content">
                        <h3>Clone of netflix landing page </h3>
                        <p>Built with react</p>
                        <div className="btns">
                            <button><a href="https://objective-hamilton-43cf0c.netlify.app">View live project</a></button>
                            <button> <a href="https://github.com/tekenna/netflix-landing-page">View source code</a></button>
                        </div>
                    </div>
                </div>
                <div className="project_card">
                    <Slider {...settings}>
                        <div className="img_card_wrap">
                            <img src="images/store1.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/store2.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/store3.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/store4.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/store5.jpeg" alt="..." />
                        </div>
                    </Slider>
                    <div className="pro_content">
                        <h3>Online phone store</h3>
                        <p>Built with react.js utilizing the context api</p>
                        <div className="btns">
                            <button><a href="https://kadas-store.netlify.app">View live project</a></button>
                            <button> <a href="https://github.com/tekenna/store-project/tree/master">View source code</a></button>
                        </div>
                    </div>
                </div>
                <div className="project_card">
                    <Slider {...settings}>
                        <div className="img_card_wrap">
                            <img src="images/carbon1.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/carbon2.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/carbon3.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/carbon4.jpeg" alt="..." />
                        </div>
                    </Slider>
                    <div className="pro_content">
                        <h3>carbon footprint calculator</h3>
                        <p>Built with react.js and node.js</p>
                        <div className="btns">
                        <button><a href="https://f-print.netlify.app">View live project</a></button>
                            <button> <a href="https://github.com/tekenna/fprint">View source code</a></button>
                        </div>
                    </div>
                </div>
                <div className="project_card">
                    <Slider {...settings}>
                        <div className="img_card_wrap">
                            <img src="images/soko1.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/soko2.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/soko3.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/soko4.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/soko5.jpeg" alt="..." />
                        </div>
                    </Slider>
                    <div className="pro_content">
                        <h3>My first ever react project</h3>
                        <p>Built with react</p>
                        <div className="btns">
                            <button><a href="https://kadas-store.netlify.app">View live project</a></button>
                            <button> <a href="https://github.com/tekenna/store-project/tree/master">View source code</a></button>
                        </div>
                    </div>
                </div>
                <div className="project_card">
                    <Slider {...settings}>
                        <div className="img_card_wrap">
                            <img src="images/temp1.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/temp2.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/temp3.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/temp4.jpeg" alt="..." />
                        </div>
                        <div className="img_card_wrap">
                            <img src="images/temp5.jpeg" alt="..." />
                        </div>
                    </Slider>
                    <div className="pro_content">
                        <h3>website template</h3>
                        <p>Built with HTML and CSS</p>
                        <div className="btns">
                            <button><a href="https://gracious-snyder-ebb6f9.netlify.app">View live project</a></button>
                            <button> <a href="https://github.com/tekenna/zuri-project-assignment/tree/master">View source code</a></button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Projects
