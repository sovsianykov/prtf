import React from "react";
import './App.scss'
import Header from "./Header/Header";
import About from "./About/About";
import Work from "./Work/Work";
import Footer from "./Footer/Footer";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div>
        <div>
            {/*<Header/>*/}
            {/*<About/>*/}
            {/*<Work/>*/}
            <Contact/>
            <Footer/>
        </div>
    </div>
  );
}

export default App;
