import React, { useEffect } from 'react';

import styled from 'styled-components';

const Component = {
  Wrapper: styled.div`
    width: 60vw;
    height: 95vh;
  `
}

const Map = () => {
    useEffect(() => {
      const container = document.getElementById('map');
      if (container) {
        const kakaoMaps = window.kakao.maps;
        const options = {
          center: new kakaoMaps.LatLng(37.55393232536325, 126.91930903553528),
          level: 3
        };
    
        const map = new kakaoMaps.Map(container, options);
        const mapTypeControl = new kakaoMaps.MapTypeControl();
        const zoomControl = new kakaoMaps.ZoomControl();
        map.addControl(mapTypeControl, kakaoMaps.ControlPosition.TOPRIGHT);
        map.addControl(zoomControl, kakaoMaps.ControlPosition.RIGHT);
      }
    }, []);

    return (
        <Component.Wrapper id="map" />
    );
}

export default Map; 