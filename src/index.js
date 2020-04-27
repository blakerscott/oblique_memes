import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import Meme from './Meme';
import Button from './Button';

const App = () => {
  return (
    <div className="app">
      <div>
        <Title />
      </div>
      <div>
      <Meme />
      </div> 
      <div>
      <Button />
      </div>  
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'))