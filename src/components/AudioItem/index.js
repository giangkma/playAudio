import React from 'react'
import "./style.css";

const AudioItem = (props) => {
    const { audio, index, audioIndex} = props;
    const selectAudio = () => {
        props.selectAudio(index);
    }
     
    return (
        <div>
            <div className={`audio-item ${audioIndex === index ? "playing" : "" }`} onClick={selectAudio} >
                <img src={audio.image} alt="audio item" />
                <p>{audio.title + " - " + audio.artist}</p>
            </div>
        </div>
    )
}
export default AudioItem;