import React from "react";

function Mode(props) {
    const name = props.name
    const status = props.status
    const species = props.species

    console.log(props);

    return (
        <div className="myMode">
            <div className="modeInside">
                <p>{name}</p>
                <p>{status}</p>
                <p>{species}</p>
            </div>
            <button className="closeButton" onClick={props.onClose}>Close</button>
        </div>
    )
}

export default Mode