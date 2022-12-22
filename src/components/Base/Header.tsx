import React from 'react';

const Header = () => {
  return (
    <div className='header' style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "0 24px"}}>
      <div style={{ fontSize: "32px", padding: "8px" }}>런치피커</div>
      <div>로그인</div>
    </div>
  )
};

export default Header;