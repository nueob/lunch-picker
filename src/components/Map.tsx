import React, { useEffect } from 'react';

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
        <div id="map" style={{ width: "100vw", height: "100vh" }} />
    );
}

export default Map; 