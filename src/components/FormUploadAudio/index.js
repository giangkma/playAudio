import React, { Component } from 'react';
import './style.css';
import { TextField, Button } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Swal from 'sweetalert2';

export default class FormUploadAudio extends Component {
    closeFormUpload = () => {
        this.props.closeFormUpload();
    };

    showAlert2 = () => {
        Swal.fire('Hiện tại chưa có tình năng Upload!', 'Hãy chờ đợi thêm!', 'error');
    };

    submitFile = () => {
        this.closeFormUpload();
        setTimeout(() => {
            this.showAlert2();
        }, 500);
    };
    render() {
        const { isOpenFormUpload } = this.props;
        return (
            <div
                className={`form-upload-audio ${
                    isOpenFormUpload ? 'open' : ''
                }`}
            >
                <div className="icon-close-form">
                    <HighlightOffIcon onClick={this.closeFormUpload} />
                </div>
                <p>Upload Audio</p>
                <div className="input-file">
                    <input
                        id="fileAudio"
                        type="file"
                        name="fileAudio"
                        accept=".mp3"
                    />
                </div>
                <div>
                    <TextField label="Name Audio" name="nameAudio" />
                </div>
                <div>
                    <TextField label="Artist Audio" name="artistAudio" />
                </div>
                <Button onClick={this.submitFile} variant="contained">
                    Upload
                </Button>
            </div>
        );
    }
}
