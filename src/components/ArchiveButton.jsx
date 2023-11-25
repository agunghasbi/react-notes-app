import React from 'react';

function ArchiveButton({ id, onChangeStatus }) {
    return <button className="btn btn-success rounded-pill" onClick={() => onChangeStatus(id, false)}>Pindahkan</button>;
}

export default ArchiveButton;