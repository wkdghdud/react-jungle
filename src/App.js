import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Article from './components/Article';
import Create from './components/Create';
import Update from './components/Update';


function App() {
  
  const [mode, setMode] = useState('WELCOME');
  const [id, setId] = useState(null);
  const [nextId, setNextId] = useState(4);
  const [topics,setTopics] = useState([
    {id:1, title:'Apple', body:'사과'},
    {id:2, title:'Banana', body:'맛있다'}
  ]);
  
  let content = null;
  let contextControl = null;
  if(mode==="WELCOME"){
    content = <Article title="Welcome" body="Hello, web"></Article>
    contextControl = <>
      <a class="btn" href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>글 작성</a>
    </>
  }
  else if (mode === 'READ') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = <>
      <a class="btn" href="/create" onClick={event => {
        event.preventDefault();
        setMode('CREATE');
      }}>글 작성</a>
      <a class="btn" href={'/update/' + id} onClick={event => {
        event.preventDefault();
        setMode('UPDATE');
      }}>글 수정</a>
      <input class="btn" type="button" value="글 삭제" onClick={() => {
        const newTopics = []
        for (let i = 0; i < topics.length; i++) {
          if (topics[i].id !== id) {
            newTopics.push(topics[i]);
          }
        }
        setTopics(newTopics);
        setMode('WELCOME');
      }} />
    </>
  }
  else if (mode === 'CREATE') {
    content = <Create onCreate={(_title,_body)=>{
      const newTopic = {id:nextId, title:_title,body:_body};
      const newTopics = [...topics];
      newTopics.push(newTopic);
      setTopics(newTopics);
      setMode('READ');
      setId(nextId);
      setNextId(nextId+1);
    }}></Create>
  }
  else if (mode === 'UPDATE') {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Update title={title} body={body} onUpdate={(title,body)=>{
      const newTopics = [...topics]
      const updatedTopic = {id:id, title:title, body:body}
      for(let i=0;i<newTopics.length;i++){
        if(newTopics[i].id===id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);
      setMode('READ');

    }}></Update>    
  }

  return (
    <>
      <Header title="게시판" onChangeMode={() => {
        setMode('WELCOME');
      }}></Header>

      <div class="background">
        <div class="titlebar">글 목록</div>
        <div class="content">

          <Nav topics={topics} onChangeMode={(_id) => {
            setMode('READ');
            setId(_id);
          }}></Nav>
        </div>

        <div class="titlebar">글 내용</div>
        <div class="content">
          {content}
            <div class="btncover">
              {contextControl}
            </div>
        </div>

      </div>
    </>
  );
}

export default App;