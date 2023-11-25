import React from 'react';
import NoteItem from './NoteItem';

function ArchiveNote({ notes, query, onChangeStatus, onDelete }) {
    let archiveNote = notes.filter(note => note.archived === true && note.title.toLowerCase().includes(query.toLowerCase()));
    return (
        <div className="row">
            {(() => {
                if (archiveNote.length > 0) {
                    return archiveNote.map(note => (
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
            })()}
        </div>
    );
}

export default ArchiveNote;