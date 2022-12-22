import React from 'react';
import styled from 'styled-components';

const Component = {
  Wrapper: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 24px;
  `,
  Logo: styled.div`
    font-size: 32px;
    padding: 8px;
  `,
  Login: styled.div``
}

const Header = () => {
  return (
    <Component.Wrapper>
      <Component.Logo>런치피커</Component.Logo>
      <Component.Login>로그인</Component.Login>
    </Component.Wrapper>
  )
};

export default Header;