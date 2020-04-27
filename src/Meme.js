import React from 'react';

//basic react component
const Meme = () => {
  let number = 52;
  return (
    <div>
      <img src={require('./meme_' + number + '.png')} alt="meme" style= {{ display: 'block', margin: 'auto', width: '60%' }}></img>
    </div>
  );
};

export default Meme;