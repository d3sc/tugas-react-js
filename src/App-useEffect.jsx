import { useEffect, useState } from "react";
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
  const [permen, setPermen] = useState(0);
  const [notif, setNotif] = useState("");
  // apa itu render?
  // render itu sama seperti cara kita merefresh sebuah website yang dimana itu akan mengubah content/nilai menjadi diperbarui.
  // render akan ditriger / merender ketika ada perubahan pada state, (useState) contoh nya. ketika jumlah state permen ditambah maka akan dirender.

  // selalu dirender / dijalankan ketika ada nilai state yang diubah dan diawal membuka web akan dirender juga.
  useEffect(() => {
    console.log("selalu dirender");
  });

  // selalu dirender / dijalankan pertama kali ketika membuka web
  useEffect(() => {
    console.log("dirender pertama kali");
    alert("halo, ini sekali");
  }, []);

  // // dirender / dijalankan ketika state tertentu yang diubah
  // useEffect(() => {
  //   if (permen >= 5) {
  //     setNotif("permen kebanyakan");
  //   } else {
  //     setNotif("aman");
  //   }
  //   // use effect berjalan ketika state permen berubah, ditambah/dikurang
  // }, [permen]);

  function tambah() {
    setPermen(permen + 1);
  }

  function kurang() {
    setPermen(permen - 1);
  }
  return (
    <div className="flex justify-center items-center w-full h-screen gap-4">
      <h1 className="text-4xl">{`${permen} permen ${notif}`}</h1>
      <MyButton method={tambah} text="tambah" />
      <MyButton method={kurang} text="kurang" />
    </div>
  );
}

export default App;
