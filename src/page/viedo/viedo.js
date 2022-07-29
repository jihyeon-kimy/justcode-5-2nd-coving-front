import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BiChevronLeft } from 'react-icons/bi';
import ControlBar from './controlBar';
import BASE_URL from '../../config';
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 99vh;
  background-color: black;
  z-index: 100;
`;

const Title = styled.div`
  display: flex;
  position: absolute;
  top: 5%;
  left: 3%;
  width: auto;
  height: auto;
  color: white;
  font-size: 38px;
  z-index: 2;
  div: hover {
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  bottom: 0.9%;
  width: 100%;
`;

function Viedo() {
  const token = localStorage.getItem('token');
  const [nowPlaying, setNowPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [showControl, setShowControl] = useState(false);

  const ref = useRef();

  const totalTime = (ref && ref.current && ref.current.duration) || 0;
  const videoElement = ref && ref.current;

  const startTime = Math.floor(currentTime);
  const addTimeUpdate = () => {
    const observedVideoElement = ref && ref.current;
    if (observedVideoElement) {
      observedVideoElement.addEventListener('timeupdate', function () {
        setCurrentTime(observedVideoElement.currentTime);
      });
    }
  };

  useEffect(() => {
    addTimeUpdate();
  }, []);

  const onProgressChange = percent => {
    if (!showControl) {
      setShowControl(true);
    }

    if (videoElement) {
      const playingTime = videoElement.duration * (percent / 100);

      setCurrentTime(playingTime);
    }
  };

  const onPlayIconClick = () => {
    if (videoElement) {
      if (nowPlaying) {
        setNowPlaying(false);
        videoElement.pause();
      } else {
        setNowPlaying(true);
        videoElement.play();
      }
    }
  };

  const handleControlVisible = () => {
    if (!showControl) {
      setShowControl(true);
      setTimeout(() => {
        setShowControl(false);
      }, 2000);
    }
  };

  const navigate = useNavigate();

  const InterfaceData = {
    episode_num: null,
    id: null,
    img_url: '',
    release_date: '',
    running_time: null,
    summary: '',
    video_url: '',
  };
  const [url, setUrl] = useState({
    title: '',
    data: InterfaceData,
    programId: '',
    watch: '',
  });
  const [titleValue, setTitleValue] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setUrl(location.state);
  }, [url]);

  useEffect(() => {
    if (!url.watch && url.data.id !== null) {
      fetch(`${BASE_URL}/episode/${url.data.id}`, {
        method: 'GET',
        headers: {
          access_token: token,
          'Content-Type': 'application/json',
        },
      }).then(res => res.json());
    }
  }, [url]);

  return (
    <Container>
      {titleValue ? (
        <Title>
          <div>
            <BiChevronLeft
              size={50}
              onClick={() => {
                navigate(`/detail/${url.programId}`, {
                  state: {
                    url: url.data.video_url,
                    title: url.title,
                    epiNum: url.data.episode_num,
                    boolean: true,
                    id: url.data.id,
                  },
                });
              }}
            />
          </div>
          {url.title}&nbsp;제&nbsp;{url.data.episode_num}화
        </Title>
      ) : null}
      <video
        ref={ref}
        id="id"
        width="100%"
        height="100%"
        src={url.data ? url.data.video_url : ''}
        onClick={handleControlVisible}
      ></video>
      <Wrapper>
        <ControlBar
          onProgressChange={onProgressChange}
          onPlayIconClick={onPlayIconClick}
          totalTime={totalTime}
          currentTime={currentTime}
          startTime={startTime}
          showControl={showControl}
          nowPlaying={nowPlaying}
          videoElement={videoElement}
        />
      </Wrapper>
    </Container>
  );
}

export default Viedo;
