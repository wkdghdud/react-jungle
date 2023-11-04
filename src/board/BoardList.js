import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { detailPost } from '../redux/boardReducer';
import '../css/Body.css';
import '../css/BoardList.css';
import Header from './Header';
import Footer from './Footer';
 
function BoardList(){
    const navigate = useNavigate();
    const {postData}= useSelector(state => state.boardReducer);
    const {lastId} = useSelector(state =>state.boardReducer);

    const dispatch = useDispatch();
    const selectPost = (id) => {
        dispatch(detailPost(id));
    }
    return(
        <div style={{ width: "100vw", height: "100vh" }}>
            <Header />
            <div id='bodyDiv'>
                <h2 id='boardListTiteDiv'>
                    BoardList
                </h2>
                <button id='boardListBtn' onClick={()=>navigate('/BoardPost')}>글 작성</button>
                <div id='boardListDiv'>
                    <br />
                    <table id='boardListTable'>
                        <thead>
                            <tr>
                                <th id='boardListTh1'>글 번호</th>
                                <th>제 목</th>
                            </tr>
                        </thead>
                        <tbody>
                        {lastId !== 0 ?
                                    // 게시글 있는 경우
                                    postData.map(item => (
                                        item.id !== '' &&
                                        <tr key={item.id}> 
                                            <td id='boardListTd1' onClick={()=> selectPost(item.id)}><Link to='/BoardDetail'>{item.id}</Link></td>
                                            <td onClick={()=> selectPost(item.id)}><Link to='/BoardDetail'>{item.title}</Link></td>
                                        </tr>
                                    )) :
                                    // 게시글 없는 경우
                                    <tr>
                                        <td colSpan={2}>작성된 글이 없습니다.</td>
                                    </tr>
                                }
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default BoardList;