import React from 'react';
import "./ReasonModal.css"; // Import your CSS file for styling

const ReasonModal = ({ reason, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h3>Reason for Answer</h3>
                    <button className="close-button" onClick={onClose}>X</button>
                </div>
                <div className="modal-body">
                    <p>{reason}</p>
                </div>
            </div>
        </div>
    );
}

export default ReasonModal;
