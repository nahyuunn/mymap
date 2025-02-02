import { create } from "zustand";
interface BoardStore {
    placeId: string; // 장소 ID 추가
    visitDate: string;
    content: string;
    boardImageFileList: File[];
    setPlaceId: (placeId: string) => void; // 장소 ID 업데이트 함수 추가
    setVisitDate: (visitDate: string) => void;
    setContent: (content: string) => void;
    setBoardImageFileList: (boardImageFileList: File[]) => void;
    resetBoard: () => void;
};

const useBoardStore = create<BoardStore>(set => ({
    placeId: '', // 기본 값
    visitDate: '',
    content: '',
    boardImageFileList: [],
    setPlaceId: (placeId) => set(state => ({ ...state, placeId })), // 장소 ID 업데이트
    setVisitDate: (visitDate) => set(state => ({ ...state, visitDate })),
    setContent: (content) => set(state => ({ ...state, content })),
    setBoardImageFileList: (boardImageFileList) => set(state => ({ ...state, boardImageFileList})),
    resetBoard: () => set(state => ({ ...state, placeId: '', visitDate: '', content: '', boardImageFileList: []})) // 초기화 시 placeId 포함
}));

export default useBoardStore;
