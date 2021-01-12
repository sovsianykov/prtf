import React,{Component} from "react";




class Footer extends Component {
    render() {
        return (
            <div>
                <footer id="main-footer">
                    <div className="footer-content container">
                        <p>Copyright &copy; 2021 Sehii Ovsianykov. All Rights Reserved</p>
                        <div className="social">
                            <i className="fab fa-twitter"></i>
                            <i className="fab fa-facebook"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-linkedin"></i>
                        </div>
                    </div>
                </footer>


            </div>
        )
    }
}

export default Footer;
