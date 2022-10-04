import {Container, Nav, Navbar} from "react-bootstrap";
import {useEffect, useState} from "react";

import logo from '../../assets/img/logo.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return (
        <Navbar bg="dark" expand={"lg"} className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href={"#home"}>
                    <img src={logo} alt="logo"/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={"basic-navbar-na"}>
                    <span className={"navbar-toggler-icon"}></span>
                </Navbar.Toggle>
                <Navbar.Collapse id={"basic-navbar-nav"}>
                    <Nav className={"me-auto"}>
                        <Nav.Link href={"#home"}
                                  className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
                        <Nav.Link href={"#skills"}
                                  className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
                        <Nav.Link href={"#writeToMe"}
                                  className={activeLink === "writeToMe" ? "active navbar-link" : "navbar-link"}
                                  onClick={() => onUpdateActiveLink("home")}>Write to me</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            {/*<a href="#">*/}
                            {/*    <img src={navIcon1} alt=""/>*/}
                            {/*</a>*/}
                            <a href="#">
                                <img src={navIcon2} alt=""/>
                            </a>
                            <a href="#">
                                <img src={navIcon3} alt=""/>
                            </a>
                        </div>
                        {/*<button className="vvd" onClick={() => console.log("connect")}>*/}
                        {/*    <span>Let`s connect</span>*/}
                        {/*</button>*/}
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

