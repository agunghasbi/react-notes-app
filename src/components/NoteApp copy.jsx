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
      activeNotes: getInitialData().filter(note => note.archived == false),
      archiveNotes: getInitialData().filter(note => note.archived == true),
    }

    this.onActivateNoteHandler = this.onActivateNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
  }

  onActivateNoteHandler(id) {
    let archiveNotes = [];

    this.state.archiveNotes.map(note => {
      if (note.id == id) {
        this.setState((prevState) => {
          return {
            activeNotes: [
              ...prevState.activeNotes,
              note
            ]
          }
        })
      } else {
        archiveNotes.push(note)
      }
    })

    this.setState({ archiveNotes });
  }

  onArchiveNoteHandler(id) {
    let activeNotes = [];

    this.state.activeNotes.map(note => {
      if (note.id == id) {
        this.setState((prevState) => {
          return {
            activeNotes: [
              ...prevState.activeNotes,
              note
            ]
          }
        })
      } else {
        activeNotes.push(note)
      }
    })

    this.setState({ activeNotes });
  }

  render() {
    return (
      <div className="mx-3">
        <NoteSearch />
        <div className="row">
          <div className="col-md-3 mt-4">
            <NoteInput />
          </div>
          <div className="col-md-9 mt-4" style={{ height: "80vh", overflowY: "auto" }}>
            <h3 className="">Catatan Aktif</h3>
            {/* CARD NOTE */}
            <ActiveNote notes={this.state.activeNotes} onArchive={this.onArchiveNoteHandler} />

            <h3 className="mt-4">Arsip</h3>
            {/* CARD NOTE */}
            <ArchiveNote notes={this.state.archiveNotes} onActivate={this.onActivateNoteHandler} />
          </div>
        </div>
      </div >
    );
  }
}

export default NoteApp;
