import React from 'react'

export default function WaveButton({name, onClick}) {
    return (
        <button className="btn btn--dark btn--animated" onClick={onClick}>
            {name}
        </button>
    )
}
