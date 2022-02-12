import styled from "styled-components";
import React from "react";

const Loading = () => (
  <Wrapper>
    <div class="lds-ripple">
      <div></div>
      <div></div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
  width: 20rem;
  height: 20rem;
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 300px;
    height: 300px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 10rem;
      left: 10rem;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 20rem;
      height: 20rem;
      opacity: 0;
    }
  }
`;

export default Loading;
