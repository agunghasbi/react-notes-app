import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import ActiveButton from './ActiveButton';
import NoteBody from './NoteBody';
import NoteTitle from './NoteTitle';
import { showFormattedDate } from "../utils/index";


function NoteItem({ id, title, body, createdAt, archived, onChangeStatus, onDelete }) {
    let button;
    if (archived) {
        button = <ArchiveButton id={id} onChangeStatus={onChangeStatus} />
    } else {
        button = <ActiveButton id={id} onChangeStatus={onChangeStatus} />
    }

    return (
        <div className="col-xl-3 col-lg-4 col-md-6 my-2 my-2">
            <div className="card card-body h-100 shadow">
                <NoteTitle title={title} createdAt={showFormattedDate(createdAt)} />
                <NoteBody body={body} />
                <div className="d-flex justify-content-between mt-auto">
                    <DeleteButton id={id} onDelete={onDelete} />
                    {
                        button
                    }
                </div>
            </div>
        </div>
    );
}

export default NoteItem;