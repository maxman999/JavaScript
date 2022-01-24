import { useState } from "react";
import Average from "./Average";
import Counter from "./Counter";
import Counter2 from "./Counter2";
import Info from "./Info";

function App() {
  const [visible, setVisible] = useState(false);
  
  return (
    <>
      <Average />
      <hr />
      <Counter2 />
      <hr/>
      <div>
        <button
        onClick={() => {
          setVisible(!visible);
        }}
        >
          {visible ? '숨기기' : '보이기'}
        </button>
      </div>
      { visible && <Info />}
      <hr />
      <Counter />
    </>
  );
}

export default App;
