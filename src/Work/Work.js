import React,{Component} from "react";


import bluestar from  '../Img/items/bluestardemo.png'
import extra from  '../Img/items/extraordinary.jpg'
import search from  '../Img/items/search.png'





class Work extends Component {
    render() {
        return (
            <div>

                <section id="work-a" className="text-center py-3">
                    <div className="container">
                        <h2 className="section-title">My Work</h2>
                        <div className="bottom-line"></div>
                        <p className="lead">
                            Check out some of my projects
                        </p>
                        <div className="items">
                            <div className="item">
                                <a href="https://wesbound1.github.io/Serhii_OvsianykovDemo/">
                                <div className="item-image">
                                    <img src={bluestar} alt="bluestar"/>
                                </div>

                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">Website</p>
                                        <h2 className="item-text-title">Blue Star Company</h2>
                                    </div>
                                </div>
\                              </a>
                            </div>

                            <div className="item">
                                <a href="https://sovsianykov.github.io/webmastering/">

                                <div className="item-image">
                                    <img src={extra} alt=""/>
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">UI/UX</p>
                                        <h2 className="item-text-title">World Experience</h2>
                                    </div>
                                </div>
                            </a>
                            </div>
                            <div className="item">
                                <a href="https://sovsianykov.github.io/search-the-word/">
                                <div className="item-image">
                                    <img src={search} alt=""/>
                                </div>
                                <div className="item-text">
                                    <div className="item-text-wrap">
                                        <p className="item-text-category">js app</p>
                                        <h2 className="item-text-title">Vanishing</h2>
                                    </div>
                                </div>
                                </a>
                            </div>


                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Work
