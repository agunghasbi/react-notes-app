import React from 'react';

function DeleteButton({ id, onDelete }) {
    return <button className="btn btn-danger rounded-pill" onClick={() => onDelete(id)}>Delete</button>;
}

export default DeleteButton;