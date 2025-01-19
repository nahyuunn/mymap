import React from 'react'
import './style.css'

import { url } from 'inspector'
import { BoardListItem } from 'types/interface'
import { useNavigate } from 'react-router-dom'
import defaultProfileImage from 'assets/image/default-profile-image.jpg'


interface Props {
    boardListItem: BoardListItem
}

//      component: Board List Item 컴포넌트      //
export default function BoardItem({boardListItem}: Props) {

    //         properties       //
    const { boardNumber, content, boardImage, visitDate } = boardListItem;
    const { favoriteCount } = boardListItem;
    const { writerNickname,  writerProfileImage } = boardListItem

    //          function: 네비게이트 함수           //
 //   const navigator = useNavigate();

    //          event handler: 게시물 아이템 클릭 이벤트 처리 함수           //
    const onClickHandler = () => {
 //       navigator(boardNumber);
    }

    //        render: Board List Item 컴포넌트 렌더링      //
  return (
    <>
    <div className='board-list-item' onClick={onClickHandler}>
        <div className='board-list-item-box'>
            <div className='board-list-item-top'>
                <div className='board-list-item-profile-box'>
                    <div className='board-list-item-profile-image' style={{backgroundImage: `url(${writerProfileImage ? writerProfileImage : defaultProfileImage })`}}></div>
                </div>
                <div className='board-list-item-write-box'>
                    <div className='board-list-item-nickname'>{'user1'}</div>
                    <div className='board-list-item-visit-datetime'>{`${visitDate}에 방문`}</div>
                </div>
            </div>
            <div className='board-list-item-middle'>
                <div className='board-list-item-content'>{content}</div>
                {boardImage !== null && (
                <div className='board-list-item-image-box'>
                    <div className='board-list-item-image' style={{backgroundImage: `url(${boardImage})`}}></div>
                </div>
                )}

            </div>
            <div className='board-list-item-bottom'>
                <div className='board-list-item-counts'>{`좋아요 ${favoriteCount}`}</div>
            </div>
        </div>

    </div>

    </>

  )
}
