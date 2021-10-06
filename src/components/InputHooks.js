import React, { useState } from 'react';

const InputHooks = () => {

  const [myInput, setMyInput] = useState('Enter Text');
  const [changeNames, setChangeNames] = useState('My Family');

  const changeTheText = (e) => {
    setMyInput(e.target.value)
  }

  return (
    <div>
      <input onChange={changeTheText} />
      <h1>{myInput}</h1>
      <hr />
      <br />
      <br />
      <button
        onClick={(() => setChangeNames('Phelan'))}
      >Phelan</button>
      <button
        onClick={(() => setChangeNames('Christina'))}
      >Christina</button>
      <button
        onClick={(() => setChangeNames('Amit'))}
      >Amit</button>
      <h1>{changeNames}</h1>
  </div>
  )
}

export default InputHooks;