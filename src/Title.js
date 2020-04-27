import React from 'react';

//basic react component
const Title = () => {
    return (
      <div>
        <img src={require('./title.gif')} alt="meme" style= {{ display: 'block', margin: 'auto', width: '60%' }}></img>
      </div>
    );
  };

export default Title;