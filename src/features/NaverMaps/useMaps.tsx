import { useAtom } from "jotai";
import { mapData } from "../../entities/datas";
import { useEffect } from "react";
import { mapsOpenAtom, mapsLoadedAtom } from "../../entities/jotai";

let mapInstance: naver.maps.Map | null = null;

const loadScript = (src: string, callback: () => void) => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.onload = () => callback();
    document.head.appendChild(script);
};

const useMaps = () => {
    const [isMapLoaded, setMapLoaded] = useAtom(mapsLoadedAtom);
    const [isMapOpen, setIsMapOpen] = useAtom(mapsOpenAtom);
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const initMap = () => {
        const mapOptions = {
            zoomControl: true,
            zoomControlOptions: {
              style: naver.maps.ZoomControlStyle.SMALL,
              position: naver.maps.Position.TOP_RIGHT,
            },
            center: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            zoom: 18,
        };

        // 지도 초기화 확인
        if (document.getElementById('map')) {
            mapInstance = new naver.maps.Map('map', mapOptions);
        }
    
        // Marker 생성
        const marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(mapData.latitude, mapData.longitude),
            map: mapInstance || undefined,
        });
    
        // Marker 클릭 시 지도 초기화
        naver.maps.Event.addListener(marker, 'click', () => {
            if (confirm("네이버 지도로 이동하시겠습니까?")) {
                window.open(`https://map.naver.com/p/entry/place/1886682973?c=15.00,0,0,0,dh`, 'woc_naver_map');
            } else {
                mapInstance?.setCenter(new naver.maps.LatLng(mapData.latitude, mapData.longitude));
                mapInstance?.setZoom(18);
            }
        });
    
        // 지도 로드 완료
        setMapLoaded(true);
    };

    useEffect(() => {
        // 스크립트 로딩 확인
        if (typeof naver === "undefined") {
          loadScript(
            "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=7o1ui3zo6f",
            initMap
          );
        } else {
          initMap();
        }
    }, [initMap]);
    
    return { 
        isMapLoaded,
        isMapOpen,
        setIsMapOpen
    };
}

export default useMaps;