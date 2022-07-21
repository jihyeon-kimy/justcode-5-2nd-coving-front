import { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './progressBar';
import { BsFullscreen } from 'react-icons/bs';

import {
  BsVolumeUpFill,
  BsVolumeMuteFill,
  BsPlayFill,
  BsPauseFill,
} from 'react-icons/bs';
const Container = styled.div`
  width: 100%;
`;
const ControlBox = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  margin-top: 0.9%;

  padding-left: 2%;
  padding-right: 4%;
  width: 100%;
`;

const RightBox = styled.div`
  display: flex;
  width: auto;
`;
const LeftBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TimeBox = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

const Play = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-size: 45px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Volume = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 45px;
  margin-right: 10px;
  :hover {
    cursor: pointer;
  }
`;
const VolumeGage = styled.input`
  margin-right: 40px;
  transition: all 0.3s ease;
`;

const FullScreen = styled.button`
  border: none;
  color: white;
  font-size: 25px;
  font-weight: 900;
  background-color: transparent;
  :hover {
    cursor: pointer;
  }
`;
function ControlBar({
  onProgressChange,
  onPlayIconClick,
  totalTime,
  currentTime,
  startTime,
  showControl,
  nowPlaying,
  videoElement,
}) {
  const [volumeValue, setVolumValue] = useState('50');
  const [volumeClicked, setVolumeClicked] = useState(false);
  useEffect(() => {
    if (videoElement) {
      videoElement.volume = volumeValue / 100;
      console.log(volumeValue / 100);
    }
  }, [volumeValue]);
  const handleVolume = () => {
    if (volumeClicked) {
      if (videoElement) {
        videoElement.muted = true;
      }
      setVolumeClicked(false);
    } else {
      if (videoElement) {
        videoElement.muted = false;
      }
      setVolumeClicked(true);
    }
  };

  const toTimeString = second => {
    const date = new Date(second * 1000);

    const mm = date.getUTCMinutes();
    const ss = date.getSeconds();

    const formattedMinute = mm + ':';
    const formattedSecond = (ss < 10 ? '0' : '') + ss;

    return formattedMinute + formattedSecond;
  };
  const onMouseUp = () => {
    if (videoElement) {
      videoElement.currentTime = currentTime;
      nowPlaying ? videoElement.play() : videoElement.pause();
    }
  };

  const onMouseDown = () => {
    if (videoElement) {
      videoElement.pause();
    }
  };

  function openFullscreen() {
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      /* Firefox */ videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      /* Chrome, Safari & Opera */ videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      /* IE/Edge */ videoElement.msRequestFullscreen();
    }
  }
  const onChangeVol = e => {
    setVolumValue(e.target.value);
    console.log(volumeValue);
  };
  return (
    <>
      <Container>
        <ProgressBar
          max={totalTime}
          value={currentTime}
          onChange={onProgressChange}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
        />
        <ControlBox>
          <RightBox>
            <Play onClick={onPlayIconClick}>
              {nowPlaying ? <BsPauseFill /> : <BsPlayFill />}
            </Play>
            <Volume onClick={handleVolume}>
              {volumeClicked ? <BsVolumeUpFill /> : <BsVolumeMuteFill />}
            </Volume>
            {volumeClicked ? (
              <VolumeGage
                onChange={onChangeVol}
                type="range"
                value={volumeValue}
                min="0"
                max="100"
              />
            ) : null}
            <TimeBox>
              <span>{toTimeString(startTime)} /&nbsp;</span>
              <span>{toTimeString(totalTime)}</span>
            </TimeBox>
          </RightBox>
          <LeftBox>
            <FullScreen onClick={openFullscreen}>
              <BsFullscreen />
            </FullScreen>
          </LeftBox>
        </ControlBox>
      </Container>
    </>
  );
}

export default ControlBar;
