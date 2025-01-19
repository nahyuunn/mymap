import React, { ChangeEvent, useEffect, useState } from 'react'
import './style.css'
import InputBox from 'components/InputBox';

declare global {
    interface Window {
      kakao: any;
    }
  }
  
export default function SearchMap() {
    const [value, setValue] = useState<string>('');

    //    state: 에러 상태   //
    const [error, setError] = useState<boolean>(false);

    //    event handler: 검색어어 변경 이벤트 처리   //
    const onSearchWordChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setError(false);
      const { value } = event.target;
      setValue(value);
    }

    useEffect(() => {

        let container = document.getElementById(`map`); // 지도를 담을 영역의 DOM 레퍼런스
        let options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도 중심 좌표
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
    
        let map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴



    }, []);
    
      return (
        <>
        <div className='search-box'>
            <InputBox type='text' placeholder='장소 이름을 입력하세요' value={value} error={false} onChange={onSearchWordChangeHandler} />
        </div>
            <div id="map" />
        </>

      );
}
