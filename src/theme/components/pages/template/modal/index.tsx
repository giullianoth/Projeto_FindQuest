import { useState } from "react";
import Modal from "react-modal";
import Button from "../../../elements/form/button";

import { FaAngleDoubleLeft } from "@react-icons/all-files/fa/FaAngleDoubleLeft";

Modal.setAppElement("#root");

export default function ModalWindow(props: {
    children: any,
    isVisible: boolean,
    onClose: any,
    afterOpenModal?: any
}) {

    const [isModalOpen, setModalOpen] = useState(props.isVisible);

    const openModal = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        props.onClose();
    };

    if (!isModalOpen) {
        return null;
    }

    return (
        <Modal isOpen={isModalOpen} closeTimeoutMS={200}>
            <section className="modal">
                {props.children}
                <Button className="close" onClick={closeModal}><FaAngleDoubleLeft /> Voltar</Button>
            </section>
        </Modal>
    );
}