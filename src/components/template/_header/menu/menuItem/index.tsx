import Anchor from "../../../../elements/anchor";

export default function MenuItem({menuText, menuLink}: {menuText: string, menuLink: string}) {
    return (
        <li><Anchor href={menuLink}>{menuText}</Anchor></li>
    );
}