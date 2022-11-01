import './App.css';
import React, { useState } from 'react';
import { Button } from './components/Button';
import { Article } from './components/Article';

function App() {
  // State hook
  // let backgroundColor = 'bg-blue';

  const [backgroundColor, setBackgroundColor] = useState('bg-blue');
  // const [width, setWidth] = useState(500);
  // const [todos, setTodos] = useState([]);

  // function buttonClickHandler(event) {

  //   if (event.target.className.includes('btn-red')) {
  //     // backgroundColor = 'bg-red';
  //     setBackgroundColor('bg-red');
  //     // alternative to updating the state
  //     // setBackgroundColor((previousState) => {
  //     //   return 'bg-red';
  //     // });
  //     // setWidth('300px');
  //   }

  //   if (event.target.className.includes('btn-blue')) {
  //     // backgroundColor = 'bg-blue';
  //     setBackgroundColor('bg-blue');
  //     // setWidth({ hello: 'world' });
  //     // setTodos([{}, {}, {}]);
  //   }

  //   if (event.target.className.includes('btn-yellow')) {
  //     // backgroundColor = 'bg-yellow';
  //     setBackgroundColor('bg-yellow');
  //     // setWidth('500px');
  //   }
  // }

  function buttonClickHandler(className) {
    setBackgroundColor(className);
  }

  return (
    // <main className={backgroundColor} style={{ width }}>
    <main className={backgroundColor}>
      {/* <Article />
      <Article />
      <Article />
      <Article />
      <Article /> */}

      <section>
        <p>Color Picker</p>
        {/* Button({ text: 'red' }) */}
        <Button text="red" className="btn-red" onClick={buttonClickHandler} />
        <Button text="blue" className="btn-blue" onClick={buttonClickHandler} />
        <Button text="yellow" className="btn-yellow" onClick={buttonClickHandler} />
      </section>
    </main>
  );
}

export default App;

function useCustomState(defaultValue) {
  let value = defaultValue;

  function reRenderReactComponent(newValue) {
    value = newValue;
  }

  return [value, reRenderReactComponent]
}
