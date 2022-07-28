import Anchor from "../../../elements/anchor";

export default function Logo() {
    return (
        <div className="logo flex-2">
            <h1><Anchor href="http://localhost:3000" className="transition">FindQuest</Anchor></h1>
        </div>
    );
}