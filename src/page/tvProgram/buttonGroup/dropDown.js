import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

function Dropdown() {
  let navigate = useNavigate();
  let location = useLocation();
  const genres = ['장르 전체', '코미디', '범죄', '로맨스', '공포', '복수'];
  const channels = ['채널 전체', 'JTBC', 'tvN', 'TVING', '채널A', 'Mnet'];
  const [openGenreDropdown, setOpneGenreDropdown] = useState(false);
  const [openChannelDropdown, setOpneChannelDropdown] = useState(false);

  let URL = decodeURI(location.search).substring(1).split(/&|=/);

  const [filterValue, setFilterValue] = useState({
    genre: URL.includes('genre') ? URL[URL.indexOf('genre') + 1] : '장르 전체',
    channel: URL.includes('channel')
      ? URL[URL.indexOf('channel') + 1]
      : '장르 전체',
    sort: URL.includes('sort') ? URL[URL.indexOf('sort') + 1] : '',
  });

  const handleFilterValue = (name, value) => {
    setFilterValue(prev => {
      return { ...prev, [name]: value };
    });
  };

  useEffect(() => {
    let queryString = Object.keys(filterValue)
      .filter(k => !filterValue[k].includes('전체'))
      .filter(k => filterValue[k].length !== 0)
      .map(k => k + '=' + filterValue[k])
      .join('&');
    navigate(`/list?${queryString}`);
  }, [filterValue, navigate]);

  return (
    <Container>
      <DropdownGroup>
        <DropDown>
          <TitleGroup
            onClick={() => {
              setOpneGenreDropdown(prev => !prev);
            }}
          >
            <Title>{filterValue.genre}</Title>

            {openGenreDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </TitleGroup>
          {openGenreDropdown && (
            <DropdownList>
              {genres.map((genre, idx) => {
                return (
                  <DropdownItem
                    onClick={() => {
                      handleFilterValue('genre', genre);
                      setOpneGenreDropdown(false);
                    }}
                    key={genre.toString() + idx.toString()}
                  >
                    {genre}
                  </DropdownItem>
                );
              })}
            </DropdownList>
          )}
        </DropDown>
        <DropDown>
          <TitleGroup
            onClick={() => {
              setOpneChannelDropdown(prev => !prev);
            }}
          >
            <Title>{filterValue.channel}</Title>

            {openChannelDropdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </TitleGroup>
          {openChannelDropdown && (
            <DropdownList>
              {channels.map((channel, idx) => {
                return (
                  <DropdownItem
                    name={channel}
                    onClick={() => {
                      handleFilterValue('channel', channel);
                      setOpneChannelDropdown(false);
                    }}
                    key={channel.toString() + idx.toString()}
                  >
                    {channel}
                  </DropdownItem>
                );
              })}
            </DropdownList>
          )}
        </DropDown>
      </DropdownGroup>
      <ToggleGroup>
        <Toggle
          id="latest"
          value="최신순"
          onChange={() => {
            handleFilterValue('sort', '최신순');
          }}
        />
        <Label htmlFor="latest">최신순</Label>
        <Toggle
          id="popularity"
          valule="인기순"
          onChange={() => {
            handleFilterValue('sort', '인기순');
          }}
        />
        <Label htmlFor="popularity">인기순</Label>
      </ToggleGroup>
    </Container>
  );
}

export default Dropdown;

const Container = styled.div`
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DropdownGroup = styled.div`
  display: flex;
`;

const DropDown = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
`;

const TitleGroup = styled.div`
  display: flex;
  align-items: center;
  line-height: 45px;
`;

const Title = styled.span`
  padding-left: 0.7%;
  margin-right: 15%;
  position: relative;
  font-size: calc(8px + 0.5vw);
  color: #ffffff;

  :hover {
    cursor: pointer;
  }
`;

const DropdownList = styled.div`
  width: 150px;
  position: absolute;
  top: 100%;
  left: -6px;
  display: flex;
  flex-direction: column;
  background: #212121;
  font-size: calc(8px + 0.5vw);
`;

const DropdownItem = styled.div`
  padding: 5% 5%;
  font-weight: 500;

  :hover {
    background: #8180803d;
    color: #ffffff;
    cursor: pointer;
  }
`;

const ToggleGroup = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-size: calc(8px + 0.5vw);

  :hover {
    cursor: pointer;
    filter: brightness(130%);
  }
  :nth-child(2)::after {
    content: '|';
    margin: 0 15px;
  }
`;
const Toggle = styled.input.attrs(props => ({
  type: 'radio',
  name: 'sort',
}))`
  display: none;
  &:checked + ${Label} {
    color: #ffffff;
  }
`;
