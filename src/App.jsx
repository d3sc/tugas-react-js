import { useState } from "react";
import "./App.css";

function MyButton({ method, text }) {
  return (
    <>
      <button
        className={`py-2 px-4 rounded bg-blue-500 text-white`}
        onClick={method}
      >
        {text}
      </button>
    </>
  );
}

function App() {
  const [count, setCount] = useState(0);
  function tambah() {
    setCount(count + 1);
  }
  function kurang() {
    setCount(count - 1);
  }
  return (
    <div className="flex justify-center items-center w-full h-screen gap-4">
      <h1 className="text-4xl">{count}</h1>
      <MyButton method={tambah} text="tambah" />
      <MyButton method={kurang} text="kurang" />
    </div>
  );
}

export default App;
