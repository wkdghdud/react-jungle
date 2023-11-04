import { combineReducers } from 'redux'; //루트 리듀서 생성
import boardReducer from './boardReducer';//포스트 게시판과 관련된 액션에 대한 상태 변화를 처리하는 역할
 
const rootReducer = combineReducers({ boardReducer }); //
 
export default rootReducer;