import Anchor from "../../../../elements/anchor";
import logo from "../../../../../assets/images/logotype_small.png";

export default function Logo() {
    return (
        <div className="logo">
            <Anchor href="http://localhost:3000">
                <h1>FindQuest</h1>
                <img src={logo} alt="FindQuest" style={{display: "none"}} />
            </Anchor>
        </div>
    );
}