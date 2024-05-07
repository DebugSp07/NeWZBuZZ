// CardModal Component: This component represents a modal that displays detailed information about a news card when clicked.

import React from 'react';
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import '../css/CardModal.css';

// CardModal component takes in three props: data (the news item data), isActive (whether the modal should be open), and onClose (function to close the modal)
const CardModal = ({ data, isActive, onClose }) => {
  return (
    // Modal component from 'react-responsive-modal' library is used to create a modal
    <Modal open={isActive} onClose={onClose} center classNames={{ modal: 'custom-modal' }}>
      <div className="modal-content">
        {/* Displaying the image of the news */}
        <img src={data.urlToImage} alt={data.title} className="modal-image" />
        <div className="modal-details">
          {/* Displaying title, date, description, and content of the news */}
          <h2>{data.title}</h2>
          <span className="modal-date">{data.date}</span>
          <p className="modal-summary">{data.description}</p>
          <p>{data.content}</p>
        </div>
      </div>
    </Modal>
  );
};

export default CardModal;
