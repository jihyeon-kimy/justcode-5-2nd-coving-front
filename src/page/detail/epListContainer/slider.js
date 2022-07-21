import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import BASE_URL from '../../../config';

const EpListSlider = styled.div`
display: flex;
overflow-x: scroll;
max-width: 100%;
height 100%;
padding-left: 4%;
scroll-behavior: smooth;


::-webkit-scrollbar {
    width: 5px;
    height: 4px;
}

::-webkit-scrollbar-thumb {
    
    background: #5c5c5c;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background: #212121;
}
  div {
    
    display: flex;
    flex-direction: column;
    min-width: ${prop => prop.contentsBoxWidth}px;
    min-height ${prop => prop.contentsBoxheight}px;
    width: ${prop => prop.contentsBoxWidth}px;
    height ${prop => prop.contentsBoxheight}px;
    margin-right: 15px;
    margin-top: 15px;
    margin-bottom: 20px;
    border-radius:3px;
    
    
    :hover {
      transform: translateY(-15px);
      transition: all 0.2s;
      cursor: pointer;
    }
    transition: all 0.2s;
  }
  img{
   width: 100%;
    height: auto;
    max-height: 150px;
    border-radius:3px;
    margin-bottom: 10px;
    
  }
`;

const Button = styled.button`
  position: absolute;
  right: ${prop => prop.right}%;
  left: ${prop => prop.left}%;
  width: 50px;
  height: 300px;
  border: none;
  background: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
  z-index: 2;
  span {
    color: white;
  }
`;
const EpTitle = styled.p`
  color: #ffffff;
  margin-bottom: 10px;
`;
const Summary = styled.p`
  width: 100%;
  height: 300px;

  overflow: hidden;
  white-space: normal;
  line-height: 1.2;
  height: 3.6em;
  text-align: left;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-size: 14px;
  color: #a1a1a1;
`;
const EtcBox = styled.span`
  display: flex;
  margin-top: 8px;
`;
const RunningTime = styled.span`
  font-size: 14px;
  margin-left: 4px;
  color: #787878;
`;
const RealeseDate = styled.span`
  font-size: 14px;
  padding-right: 4px;
  color: #787878;
  border-right: 0.1px solid;
`;

function Slider({ width, height, data, title, watch, programId }) {
  const [value, setValue] = useState();
  const [watchs, setWatchs] = useState([]);
  const navigate = useNavigate();
  const el = useRef();
  const token = localStorage.getItem('token');
  const scroll = scrollOffset => {
    el.current.scrollLeft += scrollOffset;
  };

  const onRightClick = () => {
    scroll(1000);
  };
  const onLeftClick = () => {
    scroll(-1000);
  };

  const onOver = () => {
    setValue(true);
  };

  const onLeave = () => {
    setValue(false);
  };

  useEffect(() => {
    if (watch) {
      setWatchs(watch);
    }
  }, [watch]);
  // const onWish = () => {
  //   const res = {
  //     id: [programId],
  //   };
  //   if (wishValue) {

  //     fetch(`${BASE_URL}/episode/:id`, {
  //       method: 'POST',
  //       headers: {
  //         access_token: token,
  //         'Content-Type': 'application/json',
  //       },
  //     })
  //       .then(res => res.json())
  //       .then(res => {
  //         console.log(res);

  //         fetch(`${BASE_URL}/my/favorite`, {
  //           method: 'GET',
  //           headers: {
  //             access_token: token,
  //             'Content-Type': 'application/json',
  //           },
  //         })
  //           .then(res => res.json())
  //           .then(res => {
  //             setWishs(res.data.map(i => i.id));
  //           });
  //       });
  //   }
  // };
  // console.log(watch.includes(data.id));
  // console.log(watchs);
  console.log(data);
  return (
    <>
      <EpListSlider
        ref={el}
        onMouseEnter={onOver}
        onMouseLeave={onLeave}
        contentsBoxWidth={width}
        contentsBoxheight={height}
      >
        {value ? (
          <Button left={0} right={0} onClick={onLeftClick}>
            <span>
              <BiChevronLeft size={40} />
            </span>
          </Button>
        ) : null}
        {data.map((i, inx) => (
          <>
            <div
              id={inx + 1}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate('/video', {
                  state: {
                    title: title,
                    data: i,
                    watch: watchs.includes(data.id),
                    programId: programId,
                  },
                });
              }}
            >
              <img src={i.img_url} />

              <EpTitle>
                {title} 제{i.episode_num}화
              </EpTitle>
              <Summary>{i.summary}</Summary>
              <EtcBox>
                <RealeseDate>{i.release_date}</RealeseDate>
                <RunningTime>{i.running_time}분</RunningTime>
              </EtcBox>
            </div>
          </>
        ))}
        {value ? (
          <Button left={96.7} right={0} onClick={onRightClick}>
            <span>
              <BiChevronRight size={40} />
            </span>
          </Button>
        ) : null}
      </EpListSlider>
    </>
  );
}

export default Slider;
