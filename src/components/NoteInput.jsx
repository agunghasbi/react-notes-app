import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            titleLength: 0
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(e) {
        const title = e.target.value
        if (title.length <= 50) {
            this.setState(() => {
                return {
                    title: title
                }
            })
            const titleLength = title.length
            this.setState({ titleLength })
        }
    }

    onBodyChangeEventHandler(e) {
        this.setState(() => {
            return {
                body: e.target.value,
            }
        })
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form onSubmit={this.onSubmitEventHandler}>
                <h3 className="text-center">Buat Catatan</h3>
                <div className="card card-body">
                    <div class="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Masukkan Judul" value={this.state.title} onChange={this.onTitleChangeEventHandler} />
                        <span class="input-group-text" id="basic-addon2">{this.state.titleLength}/50</span>
                    </div>
                    <textarea className="form-control mt-2" placeholder="Tuliskan catatanmu di sini.." style={{ height: "50vh" }} value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type="submit" className="btn btn-primary mt-2">Buat</button>
                </div>
            </form>
        );
    }
}

export default NoteInput;