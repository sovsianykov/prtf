import React,{Component} from "react";

import Typewr from './Typewryter';
import {Link} from "react-router-dom";
class Header extends Component{

    render() {
        return (
            <div>
                <header id="header-home">
                    <div>

                    </div>
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
                            < Link to ="work/" className="btn-light">View My Work</Link>
                        </div>
                    </div>
                </header>
            </div>
        )
    }

}
export default Header
