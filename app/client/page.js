'use client';
import {useState} from "react";

const Client = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className="font-bold text-7xl mb-5">{count}</h1>
      <button className="btn btn-accent" onClick={()=>setCount(count+1)}>
        INCREASE
      </button>
    </div>
  );
}

export default Client;
