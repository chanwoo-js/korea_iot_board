import { Route, Routes } from 'react-router-dom';
import UseState from './react-study/A_useState';
import Container from './layouts/Container/index'
import { AUTH_PATH, BOARD_DETAIL_PATH, BOARD_UPDATE_PATH, BOARD_WRITE_PATH, MAIN_PATH, REACT_STUDY_PATH, USER_PATH } from './constants';
import Authentication from './views/Authentication';
function App() {
  return (
    <>
    {/* 빈 Fragment : 최상위 단일 노드를 위한 틀 */}
      <Route element={<Container />}>

        <Route path={MAIN_PATH} element={<Main />} />
        {/* 로그인 + 회원가입 화면 */}
        <Route path={AUTH_PATH} element={<Authentication />} />
        {/* 게시물 상세 보기 화면 */}
        <Route path={BOARD_DETAIL_PATH(':boardNumber')} element={<Board />} />
        {/* 게시글 작성 화면 */}
        <Route path={BOARD_WRITE_PATH} element={<Board />} />
        {/* 게시글 수정 화면 */}
        <Route path={BOARD_UPDATE_PATH(":boardNumber")} element={<Board />} />
        {/* 마이페이지 */}
        <Route path={USER_PATH} element={<User />} />
        {/* 라우트 컴포넌트의 index 속성
        : 상위 컴포넌트의 경로로 출력 ( 기본 자식 라우트)
         */}
         <Route path={REACT_STUDY_PATH} element={<UseState/>} />

      </Route>
    </>
  );
}

export default App;
