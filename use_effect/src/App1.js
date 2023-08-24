import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(0);
  useEffect(() => {
    console.log("render");
  });
  return (
    <div>
      <button onClick={() => setData(data + 1)}>Click me</button>
    </div>
  );
}

export default App;
