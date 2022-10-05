import Logo from "./logo";
import Menu from "./menu";

export default function Header() {
    return (
        <header className="main_header">
            <div className="main_header_content">
                <Logo />
                <Menu />
            </div>
        </header>
    );
}