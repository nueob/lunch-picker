import React from 'react';
import styled from 'styled-components';

import Map from '../Map';

const Component = {
  Wrapper: styled.div`
    display: flex;
  `,
  LeftWrapper: styled.div`
    flex: 0 0 40%;
  `,
  RightWrapper: styled.div`
    flex: 0 0 60%;
  `
}

const Body = () => {
  return (
    <Component.Wrapper className='body'>
      <Component.LeftWrapper>왼쪽 사이드바</Component.LeftWrapper>
      <Component.RightWrapper>
        <Map />
      </Component.RightWrapper>
    </Component.Wrapper>
  )
};

export default Body;