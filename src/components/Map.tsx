import React, { useEffect } from 'react';

import styled from 'styled-components';

const Component = {
  Wrapper: styled.div`
    width: 100vw;
    height: 100vh;
  `
}

const Map = () => {
    useEffect(() => {

        const container = document.getElementById('map');
        if (container) {
          const options = {
            center: new window.kakao.maps.LatLng(37.55393232536325, 126.91930903553528),
            level: 3
          };
      
          const map = new window.kakao.maps.Map(container, options);
        }
      }, []);

    return (
        <Component.Wrapper id="map" />
    );
}

export default Map; 