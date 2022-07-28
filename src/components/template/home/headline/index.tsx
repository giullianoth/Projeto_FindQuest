import { useState } from "react";
import headlineBackground from "../../../../assets/images/headline.jpg";
import Anchor from "../../../elements/anchor";

export default function Headline() {

    const [navbarHeight, setNavbarHeight] = useState({ h: document.querySelector(".main_header")?.scrollHeight });
    window.onload = () => { setNavbarHeight({ h: document.querySelector(".main_header")?.scrollHeight }) };
    window.onresize = () => { setNavbarHeight({ h: document.querySelector(".main_header")?.scrollHeight }) };

    return (
        <section className="main_headline container-full bg-image transition" style={{
            backgroundImage: `url(${headlineBackground})`,
            height: `calc(100vh - ${navbarHeight.h}px)`,
            marginTop: `${navbarHeight.h}px`
        }}>
            <div className="main_headline_content container-in flex">
                <header className="flex-2">
                    <h1>Conheça o <span>FindQuest.</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora fugit, alias dolorum rem laboriosam iste reiciendis ad commodi distinctio aut pariatur explicabo temporibus praesentium! Est ex quaerat optio error beatae?</p>
                    <Anchor href="#" className="btn btn-big">Saiba Mais</Anchor>
                </header>
            </div>
        </section>
    );
}