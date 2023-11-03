import React, { useState } from 'react';

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  const handleTitleChange = event => {
    setTitle(event.target.value);
  };

  const handleBodyChange = event => {
    setBody(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const updatedTitle = event.target.title.value;
    const updatedBody = event.target.body.value;
    props.onUpdate(updatedTitle, updatedBody);
  };

  return (
    <article>
      <h2>글 수정</h2> 
      <form onSubmit={handleSubmit}>
        <p>제목</p>
        <p>
          <input type="text" name="title" placeholder="title" value={title} onChange={handleTitleChange} />
        </p>
        <p>내용</p>
        <p>
          <textarea name="body" placeholder="body" value={body} onChange={handleBodyChange}></textarea>
        </p>
        <p>
          <input type="submit" value="수정 완료" />
        </p>     
      </form>
    </article>
  );
}

export default Update;