import { useState } from "react";
import LoginButton from "./login";
import MenuItem from "./menuItem";
import MobileIcon from "./mobileIcon";
import SignInButton from "./signIn";

export default function Menu() {

    const [isMobileActive, setMobileActive] = useState({
        active: false,
        menuHeight: ""
    });

    window.onresize = () => {
        if (window.innerWidth > 896) {
            setMobileActive({
                active: false,
                menuHeight: ""
            });
        }
    }

    const toggleMenu = () => {
        let navbarHeight = document.querySelector(".main_header .main_header_content .logo")?.scrollHeight;

        if (!isMobileActive.active) {
            setMobileActive({
                active: !isMobileActive.active,
                menuHeight: `calc(100vh - ${navbarHeight}px)`
            });
        } else {
            setMobileActive({
                active: !isMobileActive.active,
                menuHeight: ""
            });
        }
    };

    const menu = [{
        menuText: "Home",
        menuLink: "#"
    }, {
        menuText: "Link",
        menuLink: "#"
    }, {
        menuText: "Link 2",
        menuLink: "#"
    }];

    return (
        <nav className="menu">
            <MobileIcon
                onClick={toggleMenu}
                active={isMobileActive.active ? " active" : ""} />

            <ul style={{ height: isMobileActive.menuHeight }}>
                {menu.map((item, index) =>
                    <MenuItem {...item} key={index + 1} />
                )}

                <li key={menu.length + 1}><LoginButton /></li>
                <li key={menu.length + 2}><SignInButton /></li>
            </ul>
        </nav>
    );
}