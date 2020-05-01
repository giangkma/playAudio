import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import React, { useRef, useState } from 'react';
import TimeSlider from 'react-input-slider';
import './App.css';
import audios from './audios';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import AudioItem from './components/AudioItem';
import { Button } from '@material-ui/core';
import FormUploadAudio from './components/FormUploadAudio';

const App = () => {
    const audioRef = useRef();
    const [audioIndex, setAudioIndex] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isPlay, setPlay] = useState(false);
    const [isOpenSideBar, setOpenSideBar] = useState(true);
    const [isOpenFormUpload, setOpenFormUpload] = useState(false);

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handlePausePlayClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlay(!isPlay);
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setPlay(true);
            audioRef.current.play();
        }
    };
    const lengthAudios = audios.length;
    const renderAudioItem = () => {
        let xhtml = null;
        xhtml = audios.map((audio, index) => {
            return (
                <AudioItem
                    key={index}
                    index={index}
                    audio={audio}
                    selectAudio={() => {
                        selectAudio(index);
                    }}
                    audioIndex={audioIndex}
                />
            );
        });
        return xhtml;
    };
    const selectAudio = (index) => {
        setAudioIndex(index);
    };

    const closeFormUpload = () => {
        setOpenFormUpload(false);
    };

    const previousAudio = () => {
        if (audioIndex === 0) setAudioIndex(lengthAudios - 1);
        else setAudioIndex(audioIndex - 1);
    };

    const nextAudio = () => {
        if (audioIndex === lengthAudios - 1) setAudioIndex(0);
        else setAudioIndex(audioIndex + 1);
    };

    const renderTime = () => {
        let xhtml = null;
        let cTimeMinute = Math.floor(currentTime / 60);
        let cTimeSecond = Math.floor(currentTime % 60);
        let dTimeMinute = Math.floor(duration / 60);
        let dTimeSecond = Math.floor(duration % 60);
        let cTime = `${cTimeMinute} : ${
            cTimeSecond < 10
                ? `0${cTimeSecond}`
                : `${cTimeSecond}`
        }`;
        let dTime = `${dTimeMinute} : ${
            dTimeSecond < 10
                ? `0${dTimeSecond}`
                : `${dTimeSecond}`
        }`;
        xhtml = `${cTime} / ${dTime}`;
        return xhtml;
    };

    return (
        <div className="container">
            <div className="audio">
                <div className="background"></div>
                {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img
                    className={`Song-Thumbnail ${
                        isPlay ? 'playAudio' : 'pauseAudio'
                    }`}
                    src={audios[audioIndex].image}
                    alt="image"
                />
                <h2 className="Song-Title">{audios[audioIndex].title}</h2>
                <p className="Singer">{audios[audioIndex].artist}</p>
                <div className="Control-Button-Group">
                    <div
                        className="Prev-Button"
                        onClick={() => {
                            previousAudio();
                        }}
                    >
                        <SkipPreviousIcon />
                    </div>
                    <div
                        className="Pause-Play-Button"
                        onClick={handlePausePlayClick}
                    >
                        {isPlay ? (
                            <PauseCircleOutlineIcon />
                        ) : (
                            <PlayCircleOutlineIcon />
                        )}
                    </div>
                    <div
                        className="Next-Button"
                        onClick={() => {
                            nextAudio();
                        }}
                    >
                        <SkipNextIcon />
                    </div>
                </div>
                <p className="render-time" >{renderTime()}</p>
                <TimeSlider
                    axis="x"
                    xmax={duration}
                    x={currentTime}
                    onChange={handleTimeSliderChange}
                    styles={{
                        track: {
                            backgroundColor: '#e3e3e3',
                            height: '2px',
                        },
                        active: {
                            backgroundColor: '#333',
                            height: '2px',
                        },
                        thumb: {
                            marginTop: '-3px',
                            width: '8px',
                            height: '8px',
                            backgroundColor: '#333',
                            borderRadius: 0,
                        },
                    }}
                />
                <audio
                    ref={audioRef}
                    src={audios[audioIndex].src}
                    onLoadedData={handleLoadedData}
                    onTimeUpdate={() =>
                        setCurrentTime(audioRef.current.currentTime)
                    }
                    onEnded={() => {
                        nextAudio();
                    }}
                />
            </div>
            {!isOpenSideBar ? (
                <label className="open-sidebar">
                    <MenuOpenIcon
                        onClick={() => {
                            setOpenSideBar(true);
                        }}
                    />
                </label>
            ) : (
                ''
            )}
            <div className={`slide-bar ${isOpenSideBar ? 'open' : 'close'} `}>
                <label className="close-sidebar">
                    <HighlightOffIcon
                        onClick={() => {
                            setOpenSideBar(false);
                        }}
                    />
                </label>
                <h1>List Audios</h1>
                {renderAudioItem()}
                <div className="button-add-audio">
                    <Button
                        variant="contained"
                        onClick={() => {
                            setOpenFormUpload(true);
                        }}
                    >
                        Upload Audio
                    </Button>
                </div>
            </div>
            <FormUploadAudio
                isOpenFormUpload={isOpenFormUpload}
                closeFormUpload={closeFormUpload}
            />
        </div>
    );
};

export default App;
