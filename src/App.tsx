import { useState } from "react";
import "./App.css";
import Test from "./Test";

function App() {
  const [id, setId] = useState(0);
  const [show, setShow] = useState(false);

  const forceUpdate = () => {
    setId((id) => id + 1);
  };

  return (
    <div>
      {show ? <Test id={id} /> : null}
      <button onClick={() => setShow((show) => !show)}>Toggle Child</button>
      <button onClick={forceUpdate}>Force Update App</button>
    </div>
  );
}

export default App;
