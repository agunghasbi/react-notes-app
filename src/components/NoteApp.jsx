import React from "react";
import ArchiveNote from "./ArchiveNote";
import ActiveNote from "./ActiveNote";
import { getInitialData } from "../utils/index";
import NoteInput from "./NoteInput";
import NoteSearch from "./NoteSearch";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      query: ''
    }

    this.onChangeStatusNoteHandler = this.onChangeStatusNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
  }

  onChangeStatusNoteHandler(id, archiveStatus) {
    let notes = [];

    this.state.notes.map(note => {
      if (note.id == id) note.archived = archiveStatus;
      notes.push(note)
    })

    this.setState({ notes });
  }

  onDeleteNoteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onSearchNoteHandler(e) {
    this.setState(() => {
      return {
        query: e.target.value,
      }
    })
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date().toISOString()
          },
          ...prevState.notes
        ]
      }
    })
  }

  render() {
    return (
      <div className="mx-3">
        {/* <NoteSearch onChange={this.onSearchNoteHandler} /> */}
        <div className="bg-white w-50 mx-auto mt-2 shadow p-3 rounded-pill">
          <input type="text" className="form-control" onChange={this.onSearchNoteHandler} placeholder="Cari catatan..." />
        </div>
        <div className="row">
          <div className="col-lg-3 mt-4">
            <NoteInput addNote={this.onAddNoteHandler} />
          </div>
          <div className="col-lg-9 mt-4" style={{ height: "80vh", overflowY: "auto" }}>
            <h3 className="">Catatan Aktif</h3>
            {/* CARD NOTE */}
            <ActiveNote notes={this.state.notes} query={this.state.query} onChangeStatus={this.onChangeStatusNoteHandler} onDelete={this.onDeleteNoteHandler} />

            <h3 className="mt-4">Arsip</h3>
            {/* CARD NOTE */}
            <ArchiveNote notes={this.state.notes} query={this.state.query} onChangeStatus={this.onChangeStatusNoteHandler} onDelete={this.onDeleteNoteHandler} />
          </div>
        </div>
      </div >
    );
  }
}

export default NoteApp;
