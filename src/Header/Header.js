import React,{Component} from "react";
import Navb from "./Navbar/Navb";
class Header extends Component{
    render() {
        return (
            <div>
                <header id="header-home">
                    <div className="container">
                <Navb/>
                <div className="showcase">
                </div>
                        <div className="header-content">
                            <h1>
                                I Am John The
                                <span
                                    className="txt-type"
                                    data-wait="3000"
                                    data-words='["Photographer", "Designer", "UI/UX Dev"]'
                                ></span>
                            </h1>
                            <p className="lead">
                                I specialize in graphic design, UI/UX and photography
                            </p>
                            <a href="#" className="btn-light">View My Work</a>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}
export default Header
