import React, { useRef, useState } from 'react';
// Import Swiper React components
import styled from 'styled-components';

// import required modules

const EpListSlider = styled.div`
display: flex;
overflow-x: scroll;
max-width: 100%;
height 100%;
scroll-behavior: smooth;


::-webkit-scrollbar {
    width: 5px;
    height: 3px;
}

::-webkit-scrollbar-thumb {
    
    background: #5c5c5c;
    border-radius: 10px;
}
::-webkit-scrollbar-track {
    background: #212121;
}
  div {
    
    min-width: ${prop => prop.contentsBoxWidth}px;
    height ${prop => prop.contentsBoxheight}px;
    margin-right: 15px;
    margin-top: 30px;
    border: 1px solid white;
    :hover {
      transform: translateY(-15px);
      transition: all 0.2s;
    }
    transition: all 0.2s;
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

  span {
    color: white;
  }
`;

function Slider({ width, height, data }) {
  const [value, setValue] = useState();
  const el = useRef();

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
            <span>prev</span>
          </Button>
        ) : null}
        {data.map(i => (
          <div>{i}</div>
        ))}
        {value ? (
          <Button left={96.7} right={0} onClick={onRightClick}>
            <span>next</span>
          </Button>
        ) : null}
      </EpListSlider>
    </>
  );
}

export default Slider;
