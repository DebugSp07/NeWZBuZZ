// FooterModal Component: This component renders a button that opens a modal displaying information about the application when clicked from footer.

import React from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";

// FooterModal component
const FooterModal = (props) => {
    // State to manage the modal open/close status
    const [open, setOpen] = React.useState(false);

    // Content for the modal
    const policyText = (
        <p>
            Hi, I'm Vishnupriya Misra, and I'm thrilled to introduce the  NeWZBuZZ React Application! 
            It's your ultimate source for curated news with a fresh interface, delivering an immersive experience like never before.
        </p>
    );

    return (
        <>
            {/* Button to open the modal */}
            <button className="item1" onClick={() => setOpen(true)}>
                About
            </button>
            {/* Modal component */}
            <Modal open={open} onClose={() => setOpen(false)} center>
                <h2>About </h2>
                {/* Displaying policy text */}
                {policyText}
                {policyText}
                {policyText}
            </Modal>
        </>
    );
};

export default FooterModal;
