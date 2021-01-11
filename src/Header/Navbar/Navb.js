import React , {Component} from "react";
import {Nav, NavDropdown,Navbar,Collapse, NavLink} from "react-bootstrap";


class Navb extends  Component{
    render() {
        return (

            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand href="#home">Serhii Ovsianykov web-dev</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">

                </Navbar.Collapse>
            </Navbar>


        )
    }

}
export default Navb;
