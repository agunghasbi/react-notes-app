import React from 'react';

// class NoteSearch extends React.Component {
//     render() {
//         return (
//             <div className="bg-white w-50 mx-auto mt-2 shadow p-3 rounded-pill">
//                 <input type="text" className="form-control" placeholder="Cari catatan..." />
//             </div>
//         )
//     }
// }

function NoteSearch({ onChange }) {
    return (
        <div className="bg-white w-50 mx-auto mt-2 shadow p-3 rounded-pill">
            <input type="text" className="form-control" onChange={onChange(this)} placeholder="Cari catatan..." />
        </div>
    )
}

export default NoteSearch;