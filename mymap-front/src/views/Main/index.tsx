import React, { useState } from 'react'
import './style.css'
import InputBox from 'components/InputBox'
import { latestBoardListMock, favoriteListMock } from 'mocks';
import BoardListItem from 'components/BoardItem';
import FavoriteListItem from 'components/FavoriteItem';

export default function Main() {
  const [value, setValue] = useState<string>('');

  return (
    <div>메인화면
      <div className='c1'>
        {latestBoardListMock.map(boardListItem => <BoardListItem boardListItem = {boardListItem} />)}
      </div>
      <div style={{padding: '0 20px', display: 'flex', flexDirection:'column', columnGap: '30px', rowGap: '20px'}}>
        {favoriteListMock.map(favoriteListItem => <FavoriteListItem favoriteListItem = {favoriteListItem} />)}
      </div>
    </div>

  )
}
