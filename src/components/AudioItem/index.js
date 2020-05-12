import React from 'react'
import "./style.css";
// import DeleteIcon from '@material-ui/icons/Delete';

const AudioItem = (props) => {
    const { audio, index, audioIndex} = props;
    const selectAudio = () => {
        props.selectAudio(index);
    }
    // const deleteAudio = (id) => {
    //     const { deleteAudio } = props;
    //     deleteAudio(id);
    // }
    
    return (
        <div>
            <div className={`audio-item ${audioIndex === index ? "playing" : "" }`} onClick={selectAudio} >
                <img src={audio.image} alt="audio item" />
                <p>{audio.title + " - " + audio.artist}</p>
                {/* <span className="delete-audio" >
                    <DeleteIcon onClick={()=>deleteAudio(audio.id)} />
                </span> */}
            </div>
        </div>
    )
}
export default AudioItem;