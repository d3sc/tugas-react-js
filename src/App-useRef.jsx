import { useRef, useState } from "react";
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
  // const [count, setCount] = useState(0);

  // useref adalah state yang sifat nya tidak merender ulang / tidak dirender berbeda dengan useState
  const tick = useRef(0);

  // kita melakukan fungsi yang sama dengan useState yang telah kita buat untuk counting angka
  // tetapi bedanya dia tidak dirender ke tampilan website
  function tambah() {
    tick.current += 1;
    console.log(tick.current);
  }

  function kurang() {
    tick.current -= 1;
    console.log(tick.current);
  }
  return (
    <div className="flex justify-center items-center w-full h-screen gap-4">
      {/* ketika kita panggil tick.current dia tidak berubah pada tampilan website nya, tetapi dia akan tampil pada console. karena tidak dirender di dalam website */}
      <h1 className="text-4xl">{tick.current}</h1>
      <MyButton method={tambah} text="tambah" />
      <MyButton method={kurang} text="kurang" />
    </div>
  );
}

export default App;
