import React, { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://restaurant-api.dicoding.dev/list")
      .then((res) =>
        // (res) => console.log(res)
        res.json()
      )
      .then((result) => setData(result.restaurants))
      .catch((error) => console.log("data unavailable", error));
  }, []);

  console.log(data);

  if (!data) return "loading..";

  return (
    // <></>

    <div className="">
      <ul>
        {data?.map((item, id) => (
          <div key={id}>
            <p>{id}</p>
            <p>{item.name}</p>
            <p>{item.city}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}
