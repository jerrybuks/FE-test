import React from 'react'

export default function Modal(props) {
    return (
        <div
        className="modal-container"
        style={{
            display:props.isModalOpen ? 'block' : 'none'
        }}
    >
        <div className="modal-overlay" onClick={props.closeModal} />
        <div className="modal-body">
            <div className="modal-close" onClick={props.closeModal}>
                x
            </div>
            {props.children}
        </div>
    </div>
    )
}
