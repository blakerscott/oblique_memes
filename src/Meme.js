import React from 'react';

//basic react component
const Meme = () => {
  let number = 52;
  return (
    <div>
      <img src={require('./meme_' + number + '.png')} alt="meme"></img>
      <div>Hello World</div>
    </div>
  );
};

export default Meme;