import React,{Component} from "react";
import  about from '../Img/about.jpg'

class About extends Component {
    render() {
        return (
            <div>
                <section id="about-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">About Me</h2>
                        <div className="bottom-line"></div>
                        <p className="lead">
                            Let me tell you a little about myself and what I do...
                        </p>
                        <div className="about-info">
                            <img src={about} alt="about" className="bio-image" />
                            <div className="bio bg-light">
                                <h4>Your Project Is In Safe Hands</h4>
                                <p>
                                    Experienced Web Developer adept in all stages of advanced web development.
                                    Knowledgeable in user interface, testing, and debugging processes.
                                    Equipped with a diverse and promising skill-set.
                                    Proficient in an assortment of technologies, including Javascript,
                                    React Js, Github , Sass, Gulp. Able to effectively self-manage during
                                    independent projects, as well as collaborate in a team setting.
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
                <section id="about-b" className= "bg-dark py-3">
                    <div className="container">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="bottom-line"></div>
                        <h4>HTML5 & CSS3:</h4>
                        <div className="progress">
                            <div style={{width: "100%"}}></div>
                        </div>
                        <h4>SASS / ScSS:</h4>
                        <div className="progress">
                            <div style={{width: "80%"}}></div>
                        </div>
                        <h4>Gulp:</h4>
                        <div className="progress">
                            <div style={{width: "70%"}}></div>
                        </div>
                        <h4>Javascript:</h4>
                        <div className="progress">
                            <div style={{width: "70%"}}></div>
                        </div>
                        <h4>React Js:</h4>
                        <div className="progress">
                            <div style = {{width: "40%"}} ></div>
                        </div>
                        <h4>Drupal:</h4>
                        <div className="progress">
                            <div style={{width: "30%"}}></div>
                        </div>
                    </div>
                </section>

                <section id="about-c" className="py-4 bg-light">
                    <div className="container">
                        <div className="about-logos">
                            <img src="img/about-logos/logo-envato.png" alt="" />
                            <img src="img/about-logos/logo-wordpress.png" alt="" />
                            <img src="img/about-logos/logo-woocommerce.png" alt="" />
                            <img src="img/about-logos/logo-magento.png" alt="" />
                        </div>
                    </div>
                </section>
            </div>



        )
    }
}

export default About
