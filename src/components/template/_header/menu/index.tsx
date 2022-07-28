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
        if (!isMobileActive.active) {
            setMobileActive({
                active: !isMobileActive.active,
                menuHeight: `calc(100vh - ${document.querySelector(".main_header .main_header_content .logo")?.scrollHeight}px)`
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
        <nav className="menu flex-2 flex transition" style={{ height: isMobileActive.menuHeight }}>
            <MobileIcon
                onClick={toggleMenu}
                active={isMobileActive.active ? " active" : ""} />

            <ul className="flex">
                {menu.map((item, index) =>
                    <MenuItem {...item} key={index + 1} />
                )}

                <li key={menu.length + 1} className="flex"><LoginButton /></li>
                <li key={menu.length + 2} className="flex"><SignInButton /></li>
            </ul>
        </nav>
    );
}