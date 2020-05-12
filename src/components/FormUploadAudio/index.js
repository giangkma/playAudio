import React, { PureComponent } from "react";
import * as firebase from "firebase";
import "./style.css";
import { storage } from "../../firebaseConnect";
import { TextField, Button } from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import Swal from "sweetalert2";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const dataFirebase = firebase.database().ref("audios");

export default class FormUploadAudio extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            fileAudio: null,
            fileImage: null,
            nameAudio: null,
            artistAudio: null,
            urlFileAudio: null,
            urlFileImage: null,
            progressFileAudio: 0,
            progressFileImage: 0,
        };
    }

    closeFormUpload = () => {
        this.props.closeFormUpload();
    };

    selectAudio = (e) => {
        if (e.target.name === "fileAudio" || e.target.name === "fileImage") {
            this.setState({
                [e.target.name]: e.target.files[0],
            });
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    uploadFileAudio = () => {
        const { fileAudio } = this.state;
        if (!fileAudio) {
            Swal.fire("Hãy chọn file mp4 !", "", "error");
        } else {
            const upload = storage
                .ref(`Audios/${fileAudio.name}`)
                .put(fileAudio);
            upload.on(
                "state_changed",
                (snapshot) => {
                    //progress
                    const progressFileAudio = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    this.setState({ progressFileAudio });
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    //complete
                    storage
                        .ref(`Audios`)
                        .child(fileAudio.name)
                        .getDownloadURL()
                        .then((urlFileAudio) => {
                            this.setState({ urlFileAudio });
                        });
                }
            );
        }
    };
    uploadFileImage = () => {
        const { fileImage } = this.state;
        if (!fileImage) {
            Swal.fire("Hãy chọn file mp4 !", "", "error");
        } else {
            const upload = storage
                .ref(`Images/${fileImage.name}`)
                .put(fileImage);
            upload.on(
                "state_changed",
                (snapshot) => {
                    //progress
                    const progressFileImage = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    this.setState({ progressFileImage });
                },
                (error) => {
                    console.log(error);
                },
                () => {
                    //complete
                    storage
                        .ref(`Images`)
                        .child(fileImage.name)
                        .getDownloadURL()
                        .then((urlFileImage) => {
                            this.setState({ urlFileImage });
                        });
                }
            );
        }
    };

    submitFileAudio = () => {
        const {
            urlFileAudio,
            urlFileImage,
            artistAudio,
            nameAudio,
        } = this.state;
        if (!urlFileAudio || !urlFileImage) {
            Swal.fire("Bạn hãy upload file mp4 và image trước !", "", "error");
        } else if (!artistAudio || !nameAudio) {
            Swal.fire("Bạn hãy nhập đầy đủ thông tin bài hát !", "", "error");
        } else {
            this.closeFormUpload();
            dataFirebase.push({
                src: urlFileAudio,
                image: urlFileImage,
                title: nameAudio,
                artist: artistAudio,
            });
            Swal.fire("Upload Audio thành công !", "", "success");
        }
    };
    render() {
        const { progressFileAudio, progressFileImage } = this.state;
        const { isOpenFormUpload } = this.props;
        return (
            <div
                className={`form-upload-audio ${
                    isOpenFormUpload ? "open" : ""
                }`}
            >
                <div className="icon-close-form">
                    <HighlightOffIcon onClick={this.closeFormUpload} />
                </div>
                <p>Upload Audio</p>
                <div className="input-file">
                    <span>Audio</span>
                    <input
                        id="fileAudio"
                        type="file"
                        name="fileAudio"
                        accept=".mp3"
                        onChange={this.selectAudio}
                    />
                    <span>
                        <CloudUploadIcon onClick={this.uploadFileAudio} />
                    </span>
                </div>
                <progress value={progressFileAudio} max="100" />
                <div className="input-file">
                    <span>Image</span>
                    <input
                        id="fileImage"
                        type="file"
                        name="fileImage"
                        onChange={this.selectAudio}
                        accept=".jpg"
                    />
                    <span>
                        <CloudUploadIcon onClick={this.uploadFileImage} />
                    </span>
                </div>
                <progress value={progressFileImage} max="100" />
                <div>
                    <TextField
                        label="Name Audio"
                        name="nameAudio"
                        onChange={this.selectAudio}
                    />
                </div>
                <div>
                    <TextField
                        label="Artist Audio"
                        name="artistAudio"
                        onChange={this.selectAudio}
                    />
                </div>
                <Button onClick={this.submitFileAudio} variant="contained">
                    <CloudUploadIcon />
                    Upload
                </Button>
            </div>
        );
    }
}
