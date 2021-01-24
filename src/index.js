import React from 'react';
import ReactDOM from 'react-dom';
import Title from './components/Title';
import Meme from './components/Meme';
import Button from './components/Button';

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