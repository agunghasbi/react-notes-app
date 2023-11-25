import React from 'react';

function NoteTitle({ title, createdAt }) {
    return (
        <div className="border-start border-5 border-primary px-2">
            <h4>{title}</h4>
            <span className="text-secondary">{createdAt}</span>
        </div>
    );
}

export default NoteTitle;