import React from 'react';

//basic react component
const Button = () => {
  let number = 52;
  return (
    <div style= {{ display: 'block', margin: 'auto', width: '70%', padding: '25px 22% 0 27%' }} >  
      <button class="ui button">
        Choose Another
      </button>
    </div>  
  );
};

export default Button;