import React from 'react';

function ActiveButton({ id, onChangeStatus }) {
    return <button className="btn btn-success rounded-pill" onClick={() => onChangeStatus(id, true)}>Arsipkan</button>;
}

export default ActiveButton;