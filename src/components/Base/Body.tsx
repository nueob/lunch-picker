import React from 'react';

import Map from '../Map';

const Body = () => {
  return (
    <div className='body' style={{ display: "flex" }}>
      <div style={{ width: "600px" }}>왼쪽 사이드바</div>
      <Map />
    </div>
  )
};

export default Body;