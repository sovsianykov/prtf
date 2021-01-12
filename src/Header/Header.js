import React,{Component} from "react";
import Navb from "./Navbar/Navb";
import Typewr from './Typewryter';
class Header extends Component{

    render() {
        return (
            <div>
                <header id="header-home">
                <Navb/>
                    <div className="container">

                    <div className="showcase">
                </div>
                        <div className="header-content">
                            <h1>
                                I Am Sehii Ovsianykov
                            </h1>
                            <Typewr className= 'Typwrite'

                            />
                            <p className="lead">
                                I specialize in creating websites, javascript and React SPA
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
