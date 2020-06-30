import React, { useState, useContext } from "react";
import Menu from "react-burger-menu/lib/menus/slide";
import Image from "react-bootstrap/Image";
import { Nav } from "react-bootstrap";
import { LinkContainer, IndexLinkContainer } from "react-router-bootstrap";
import "../assets/styles/MobileNav.css";

const MyContext = React.createContext();

const MyProvider = (props) => {
    const [menuOpenState, setMenuOpenState] = useState(false)

    return (
        <MyContext.Provider value={{
            isMenuOpen: menuOpenState,
            toggleMenu: () => setMenuOpenState(!menuOpenState),
            stateChangeHandler: (newState) => setMenuOpenState(newState.isOpen)
        }}>
            {props.children}
        </MyContext.Provider>
    )
}

const Button = () => {
    const ctx = useContext(MyContext)
    return (
        <button onClick={ctx.toggleMenu}>Toggle Nav</button>
    )
}

const Navigation = () => {
    const ctx = useContext(MyContext)

    return (
        <Menu
            customBurgerIcon={false}
            isOpen={ctx.isMenuOpen}
            onStateChange={(state) => ctx.stateChangeHandler(state)}
            width={"100vw"}
        >
            <Nav className="flex-column text-center" id="mobile-nav-items">
                <Image src={require("../assets/images/photo.jpg")} className="img-fluid mb-3" id="my-pic" width={180} roundedCircle />
                <IndexLinkContainer to="/">
                    <Nav.Link onClick={ctx.toggleMenu}>ABOUT</Nav.Link>
                </IndexLinkContainer>
                <LinkContainer to="/skills">
                    <Nav.Link onClick={ctx.toggleMenu}>SKILLS</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/projects">
                    <Nav.Link onClick={ctx.toggleMenu}>PROJECT</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/contact">
                    <Nav.Link onClick={ctx.toggleMenu}>CONTACT</Nav.Link>
                </LinkContainer>
            </Nav>
        </Menu>
    )
}

const MobileNav = () => {

    return (
        <MyProvider>
            <Navigation />
            <Button />
        </MyProvider>
    );
}

export default MobileNav;