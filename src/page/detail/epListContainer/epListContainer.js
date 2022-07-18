import styled from 'styled-components';
import Slider from './slider';
import { BsDot } from 'react-icons/bs';

import { useState } from 'react';

const EpListBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 35px;
`;

const OrderingBox = styled.div`
  display: flex;
  
  width: 200px;
  margin-left: 4%;
  
  div:hover{
      cursor: pointer;
    }
  }
`;

function EpListContainer({ data, title }) {
  const [value, setValue] = useState(false);
  const reverse = data
    .slice(0)
    .reverse()
    .map(num => num);
  const onTClick = () => {
    setValue(true);
  };
  const onFClick = () => {
    setValue(false);
  };

  return (
    <EpListBox>
      <OrderingBox>
        <div
          onClick={onTClick}
          style={value ? { color: 'white' } : { color: '#c4c4c4' }}
        >
          첫화부터
        </div>
        <BsDot />
        <div
          onClick={onFClick}
          style={value ? { color: '#c4c4c4' } : { color: 'white' }}
        >
          최신화부터
        </div>
      </OrderingBox>
      <Slider
        width={274}
        height={276}
        data={value ? data : reverse}
        title={title}
      />
    </EpListBox>
  );
}

export default EpListContainer;
