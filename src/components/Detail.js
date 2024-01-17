import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" />
      </Background>
      <ImageTitle>
        <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/D7AEE1F05D10FC37C873176AAA26F777FC1B71E7A6563F36C6B1B497CAB1CEC2/scale?width=1440&aspectRatio=1.78"></img>
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png"></img>
          <span>PLAY</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png"></img>
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png"></img>
        </GroupButton>
      </Controls>
      <SubTitle>2018 7m Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        A Chinese mom who's sad when her grown son leaves home gets another
        chance at motherhood when one of her dumplings springs to life. But she
        finds that nothing stays cute and small forever.
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  margin-top: 45px;
`;
const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 40vh;
  min-height: 200px;
  width: 30vw;
  min-width: 300px;
  margin-top: 40px;
  margin-bottom: 40px;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
`;
const PlayButton = styled.div`
  display: flex;
  align-items: center;
  color: black;
  height: 45px;
  border-radius: 4px;
  background: rgb(249, 249, 249);
  padding: 0 24px;
  margin-right: 20px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
    color: white;
  }
`;
const TrailerButton = styled(PlayButton)`
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: white;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;
const AddButton = styled.div`
  cursor: pointer;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  border-radius: 50%;
  margin-right: 20px;
  span {
    font-size: 30px;
  }
`;
const GroupButton = styled(AddButton)``;
const SubTitle = styled.div`
  margin-top: 26px;
  font-size: 16px;
  min-height: 20px;
`;
const Description = styled.div`
  margin-top: 16px;
  line-height: 1.4;
  font-size: 20px;
  max-width: 760px;
`;
