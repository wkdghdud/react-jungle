// Create.js

import React from 'react';

function Create({ onCreate }) {
  const handleSubmit = event => {
    event.preventDefault();
    const title = event.target.title.value;
    const body = event.target.body.value;
    onCreate(title, body);
  };

  return (
    <article>
      <h2>글 작성</h2>
      <form onSubmit={handleSubmit}>
        <p>제목</p>
        <p>
          <input type="text" name="title" placeholder="title" />
        </p>
        <p>내용</p>
        <p>
          <textarea name="body" placeholder="body"></textarea>
        </p>
        <p>
          <input type="submit" value="작성 완료" />
        </p>
      </form>
    </article>
  );
}

export default Create;