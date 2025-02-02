import React, { useEffect, useState } from 'react'
import './style.css'
import FavoriteItem from 'components/FavoriteItem'
import { favoriteListMock } from 'mocks'
import { FavoriteListItem } from 'types/interface'
import defautProfileImage from 'assets/image/default-profile-image.png'
import { url } from 'inspector'

//      component: 게시물 상세 화면 컴포넌트    //
export default function BoardDetail() {

  //      component: 게시물 상세 상단 컴포넌트    //
  const BoardDetailTop = () => {

    //        state: more 버튼 상태       //
    const [showMore, setShowMore] = useState<boolean>(false);

    //        event handler: more 버튼 클릭 이벤트 처리       //
    const onMoreButtonClickHandler = () => {
      setShowMore(!showMore);
    }

    //      render: 게시물 상세 상단 컴포넌트 렌더링    //
    return (
      <div id = 'board-detail-top'>
        <div className='board-detail-top-header'>

          <div className='board-detail-title'>
            <div className='board-detail-writer-nickname'>{'나현'}</div>
            <div className='board-detail-title-dividor'>{'→'}</div>
            <div className='board-detail-place-name'>{'나가하마만게츠'}</div>
          </div>
          <div className='board-detail-top-sub-box'>
            <div className='board-detail-top-date-box'>
                <div className='board-detail-visit-date'>{'2025.01.30 방문'}</div>
                <div className='board-detail-date-dividor'>{'ㆍ'}</div>
                <div className='board-detail-write-date'>{'방금 전'}</div>
              </div>
            <div className='icon-button'>
              <div className='icon more-icon' onClick={onMoreButtonClickHandler}></div>
            </div>
          </div>
          {showMore &&
            <div className='board-detail-more-box'>
              <div className='board-detail-update-button'>{'수정'}</div>
              <div className='divider'></div>
              <div className='board-detail-delete-button'>{'삭제'}</div>
            </div>
          }
        </div>
        
        <div className='board-detail-top-main'>
          <div className='board-detail-main-text'>{'이거 진짜 맛있다 오오오오오옹오오오오오 햄부기부기 햄부기스탁스 햄부기온앤온 뭐냐 근데 맛이 좀 바뀐 듯? 예전이 좀 더 맛있었던 듯 그래도 맛있긴 함함'}</div>
          <img className='board-detail-main-image' src='https://mymap-image-bucket-test.s3.ap-northeast-2.amazonaws.com/b8b733ce-54cc-4b22-8a41-e8fa37ef5838.jpg' / >
        </div>
      </div>
    )
  }

  //      component: 게시물 상세 하단 컴포넌트    //
  const BoardDetailBottom = () => {

    const [favoriteList, setFavoriteList] = useState<FavoriteListItem[]>([]);

    useEffect(() => {
      setFavoriteList(favoriteListMock);
    }, []);

    //      render: 게시물 상세 하하단 컴포넌트 렌더링    //
    return (
      <div id='board-detail-bottom'>
        <div className='board-detail-bottom-button-box'>
          <div className='board-detail-bottom-button-group'>
            <div className='icon-button'>
              <div className='icon favorite-fill-icon'></div>
            </div>
            <div className='board-detail-bottom-button-text'>{`좋아요 ${12}`}</div>
            <div className='icon-button'>
              <div className='icon up-light-icon'></div>
            </div>
          </div>
        </div>
        <div className='board-detail-bottom-favorite-box'>
          <div className='board-detail-bottom-favorite-container'>
            <div className='board-detail-bottom-favorite-title'>{'이 글에 좋아요를 누른 사람'}</div>
            <div className='board-detail-bottom-favorite-contents'>
              {favoriteList.map(item => <FavoriteItem favoriteListItem={item}/>)}
            </div>
          </div>
        </div>
      </div>    
    )
  }

  //      render: 게시물 상세 화면 컴포넌트 렌더링    //
  return (
    <div id='board-detail-wrapper'>
      <div className='board-detail-writer-profile-image' style={{ backgroundImage: `url(${defautProfileImage})`}}></div>
      <div className='board-detail-container'>
        <BoardDetailTop />
        <BoardDetailBottom />
      </div>
    </div>
  )
}
