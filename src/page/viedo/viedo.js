import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
function Viedo() {
  return (
    <>
      <iframe
        src="https://drive.google.com/file/d/1PhJxFTPbZ-geEYYk5_MnKB6qVKnDMJ3P/preview"
        width="100%"
        height="100%"
        allow="autoplay"
      ></iframe>
      <video
        src="C:\Users\minuk\Downloads\testplayer (1).mp4"
        width="100%"
        height="100%"
      ></video>
    </>
  );
}

export default Viedo;
