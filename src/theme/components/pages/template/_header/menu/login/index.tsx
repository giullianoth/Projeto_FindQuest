import { useState } from "react";
import Login from "../../../login";
import ModalWindow from "../../../modal";

export default function LoginButton() {

    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <>
            <span className="btn-outline btn-small" onClick={() => setModalOpen(true)}>Login</span>
            {
                isModalOpen ?
                    <ModalWindow isVisible={isModalOpen} onClose={() => setModalOpen(false)}>
                        <Login />
                    </ModalWindow>
                    : null
            }
        </>
    );
}