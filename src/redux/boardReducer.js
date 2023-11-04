
//action type 정의
const TYPE_SAVE = 'POST_SAVE'; // 포스트 저장
const TYPE_DETAIL = 'POST_DETAIL'; // 포스트 디테일 세부정보 보는것
const TYPE_EDIT = 'POST_EDIT'; // 포스트 수정
const TYPE_REMOVE = 'POST_REMOVE'; //포스트 제거

//action function
export const savePost = (postData) => ({ // 새로운 포스트를 저장하는데 사용되는 액션 함수
    type : TYPE_SAVE,
    postData : {
        id : postData.id,
        title : postData.title,
        content : postData.content,
    }
})

export const detailPost = (id) => ({ //특정 포스트의 세부 정보를 가져오는데 사용되는 액션 함수, 여기서 Id를 받아들여 해당 id를 가진 포스트를 찾기위한 액션 객체를 생성
    type : TYPE_DETAIL,
    postData :{
        id : id,
    }
})

export const editPost = (postData) => ({
    type: TYPE_EDIT,
    postData: {
        id: postData.id,
        title: postData.title,
        content: postData.content,
    }
})

export const removePost = (id) => ({
    type: TYPE_REMOVE,
    postData: {
        id: id,
    }
})

const initialState = {
    lastId :0, //가장 최근의 id를 추적
    postData : [
        {
            id : '',
            title : '',
            content : '',
        }
    ],
    selectPostData: {},
}

export default function boardReducer(state = initialState, action){
    switch(action.type){
        case TYPE_SAVE:
            return { // 새로운 상태를 반환
                lastId : state.lastId+1, //최신 상태를 유지하기 위해서 +1
                postData : state.postData.concat({ //기존의 postdata 배열에 새로운 포스트 추가, concat-> 새로운 배열을생성해서 기존것과 추가된것을 합침
                    ...action.postData,//action.postdata 객체 내용을 펼친후, 새로운 id할당
                    id : state.lastId +1,
                })
            }
        case TYPE_DETAIL://바뀌는게 아니라 초기화 할 필요 없음 
            return{
                ...state,// 현재 상태복제, 기존상태를 직접 수정하지 않고 새로운 상태 생성
                selectPostData : state.postData.find(item=> item.id === action.postData.id)
            }
        case TYPE_EDIT:
            return {
                ...state,
                postData: state.postData.map(item => item.id === action.postData.id ? {...action.postData} : item),
                selectPostData: {}
            }
        case TYPE_REMOVE:
            return {
                //여기서 lastid는 현재의 마지막 id를 나타냄 만약에 lastid가 지우려는 action.postdata.id와 동일한 경우,즉 삭제하려는 포스트가 가장 최신의 id인 경우 id를 1 감소 시킴 그렇지 않은경우 현재의 lastid를 그대로사용
                lastId : state.lastId===action.postData.id ? state.lastId -1 : state.lastId,
                postData : state.postData.filter(item => item.id !==action.postData.id),
                selectPostData : {}
            }
        default:
            return state

    }
}