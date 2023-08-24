import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlwMouseMove = (e) => {
      setCoords({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handlwMouseMove);

    return () => {
      window.removeEventListener("mouseover", handlwMouseMove);
    };
  }, []);

  return (
    <div>
      <p>Mose positioned at: </p>
      <b>
        ({coords.x}, {coords.y})
      </b>
    </div>
  );
}

export default App;

//сделать привязку к мыши//
