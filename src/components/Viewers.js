import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="aa" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png"></img>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-marvel.png"></img>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-starwars.png"></img>
      </Wrap>{" "}
      <Wrap>
        <img src="/images/viewers-national.png"></img>
      </Wrap>
    </Container>
  );
}

export default Viewers;
const Container = styled.div`
  margin-top: 30px;
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  padding: 30px 0px 26px;
`;
const Wrap = styled.div`
  cursor: pointer;
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 25px 30px -10px,
    rgb(0 0 0 /73%) 0 16px 10px -10px;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover {
    box-shadow: rgb(0 0 0 /69%) 0px 40px 58px -16px,
      rgb(0 0 0 /72%) 0 30px 22px -10px;
    transform: scale(1.05);
    border: 3px solid rgba(249, 249, 249, 0.8);
  }
`;
