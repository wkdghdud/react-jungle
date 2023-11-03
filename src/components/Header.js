import React from 'react';
//홈버튼 누르면 홈으로 돌아감
const Header = ({ title, onChangeMode }) => {
    return (
      <header>
        <h1>
          <a href="/" onClick={(event) => {
            event.preventDefault();
            onChangeMode();
          }}>
            {title}
          </a>
        </h1>
      </header>
    );
  };

export default Header;