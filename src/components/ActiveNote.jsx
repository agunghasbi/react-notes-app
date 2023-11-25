import React from 'react';
import NoteItem from './NoteItem';

function ActiveNote({ notes, query, onChangeStatus, onDelete }) {
    let activeNote = notes.filter(note => note.archived === false && note.title.toLowerCase().includes(query.toLowerCase()));

    return (
        <div className="row">
            {(() => {
                if (activeNote.length > 0) {
                    return activeNote.map(note => (
                        <NoteItem
                            key={note.id}
                            id={note.id}
                            {...note}
                            onChangeStatus={onChangeStatus}
                            onDelete={onDelete}
                        />
                    ))
                } else {
                    return <h3 className="text-center">Tidak ada catatan</h3>
                }
            })()
            }
        </div>
    );
}

export default ActiveNote;