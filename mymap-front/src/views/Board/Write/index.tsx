import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import "./style.css";
import { useBoardStore, useSignInUserStore } from "stores";
import { useNavigate } from "react-router-dom";
import { AUTH_PATH, MAIN_PATH, USER_PATH } from "constant";
import { useCookies } from "react-cookie";
import { fileUploadRequest, postBoardRequest } from "apis";
import { PostBoardRequestDto } from "apis/request/board";
import { PostBoardResponseDto } from "apis/response/board";
import { ResponseDto } from "apis/response";


//        component: 게시물 작성 화면 컴포넌트        //
export default function BoardWrite() {

  //        state: 본문 영역 요소 상태       //
  const contentRef = useRef<HTMLTextAreaElement | null>(null);
  //        state: 이미지 입력 요소 참조 상태       //
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  //        state: 게시물 상태        //
  const { visitDate, setVisitDate} = useBoardStore();
  const { content, setContent } = useBoardStore();
  const { boardImageFileList, setBoardImageFileList } = useBoardStore();
  const { resetBoard } = useBoardStore();
  //        state: cookie 상태        //
  const [cookies, setCookie] = useCookies();
  //        state: 로그인 유저 상태       //
  const { signInUser } = useSignInUserStore();
  //        state: 게시물 이미지 미리보기 URL 상태        //
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  //        function: 네비게이트 함수       //
  const navigate = useNavigate();

  //        function: post board response 처리 함수       //
  const postBoardResponse = (responseBody: PostBoardResponseDto | ResponseDto | null) => {
    if (!responseBody) return;
    const {code} = responseBody;
    if (code === 'DBE') alert('데이터베이스 오류입니다.');
    if (code === 'AF' || code ==='NU') navigate(AUTH_PATH());
    if (code === 'VF') alert('내용은 필수입니다.');
    if (code !== 'SU') return;
    
    resetBoard();
    if(!signInUser) return;
    const { email } = signInUser;
    navigate(USER_PATH(email));
  }
  
  //        event handler: 업로드 버튼 클릭 이벤트 처리 함수        //
  const onUploadButtonClickHandler = async () => {
    const accessToken = cookies.accessToken;
    if (!accessToken) return;

    const boardImageList: string[] = [];
    for (const file of boardImageFileList) {
      const data = new FormData();
      data.append('file', file);

      const url = await fileUploadRequest(data);
      if (url) boardImageList.push(url);
    }
    const requestBody: PostBoardRequestDto = {
      visitDate, content, boardImageList
    }
    postBoardRequest(requestBody, accessToken).then(postBoardResponse);
  }

  //        event handler: 내용 변경 이벤트 처리        //
  const onContentChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target;
    setContent(value);
    if (!contentRef.current) return;
    contentRef.current.style.height = 'auto';
    contentRef.current.style.height = `${contentRef.current.scrollHeight}px`;
  }
  //        event handler: 방문 날짜 변경 이벤트 처리        //
  const onVisitDateChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target; // 입력된 날짜 값 가져오기
    setVisitDate(value); // 상태 업데이트
  };

  //        event handler: 이미지 변경 이벤트 처리        //
  const onImageChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || !event.target.files.length) return;
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    const newImageUrls = imageUrls.map(item => item);
    newImageUrls.push(imageUrl);
    setImageUrls(newImageUrls);

    const newBoardImageFileList = boardImageFileList.map(item => item);
    newBoardImageFileList.push(file);
    setBoardImageFileList(newBoardImageFileList);

    if (!imageInputRef.current) return;
    imageInputRef.current.value = '';

  }
  //        event handler: 이미지 업로드 버튼 클릭 이벤트 처리        //
  const onImageUploadButtonClickHandler = () => {
    if (!imageInputRef.current) return;
    imageInputRef.current.click();
  }

  //        event handler: 이미지 닫기 버튼 클릭 이벤트 처리        //
  const onImageCloseButtonClickHandler = (deleteIndex: number) => {
    if (!imageInputRef.current) return;
    imageInputRef.current.value = '';

    const newImageUrls = imageUrls.filter((url, index) => index !== deleteIndex);
    setImageUrls(newImageUrls);

    const newBoardImageFileList = boardImageFileList.filter((file, index) => index !== deleteIndex);
    setBoardImageFileList(newBoardImageFileList);
  }

  //        effect: 마운트 시 실행할 함수       //
  useEffect(() => {
    const accessToken = cookies.accessToken;
    if (!accessToken) {
      navigate(MAIN_PATH());
      return;
    }
    resetBoard();
  }, []);
  
  //        render: 게시물 작성 화면 컴포넌트 렌더링        //
  return (
    <div id="board-write-wrapper">
      <div className="board-write-container">
        <div className="board-write-box">
          <div className="board-write-visit-date-box">
            <div className="board-write-visit-date-title">언제 방문하셨나요?</div>
            <input className="board-write-visit-date-input" type="date" value={visitDate} onChange={onVisitDateChangeHandler} />
          </div>
          <div className="devider"></div>
          <div className="board-write-content-title">ODT는 어땠나요?</div>
          <div className="board-write-content-box">
            <textarea ref={contentRef} className="board-write-content-textarea" placeholder="내용을 작성해주세요." value={content} onChange={onContentChangeHandler} />
            <div className="icon-button" onClick={onImageUploadButtonClickHandler}>
              <div className="icon image-box-light-icon"></div>
            </div>
            <input ref={imageInputRef} type="file" accept="image/*" style={{display: 'none'}} onChange={onImageChangeHandler} />
          </div>
          <div className="board-write-images-box">
            {imageUrls.map((imageUrl, index) => 
            <div className="board-write-image-box">
              <img className="board-write-image" src={imageUrl} />
              <div className="icon-button image-close" onClick={() => onImageCloseButtonClickHandler(index)}>
                <div className="icon close-icon"></div>
              </div>
            </div>
            )}
          </div>
          <div className='black-large-full-button' onClick={onUploadButtonClickHandler} >{'업로드'}</div>
        </div>
      </div>
    </div>
  );
}
