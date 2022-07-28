import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
    return (
        <header className="main_header container-full absolute-position">
            <div className="main_header_content container-in flex relative-position">
                <Logo />
                <Menu />
            </div>
        </header>
    );
}