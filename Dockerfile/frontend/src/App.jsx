import { useState } from "react";

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState(null);
  const [message, setMessage] = useState("");

  const handleAdd = async () => {
    try {
      const res = await fetch(`http://backend:8000/add/?a=${a}&b=${b}&c=${c}`);
      const data = await res.json();
      setResult(data.sum);
      setMessage("");
    } catch (err) {
      setMessage("Error connecting to FastAPI backend");
    }
  };

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">React + FastAPI Hello World</h1>

      <div>
        <label className="block">A:</label>
        <input
          type="number"
          value={a}
          onChange={(e) => setA(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block">B:</label>
        <input
          type="number"
          value={b}
          onChange={(e) => setB(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <div>
        <label className="block">C:</label>
        <input
          type="number"
          value={c}
          onChange={(e) => setC(parseInt(e.target.value))}
          className="border p-2 rounded w-full"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add
      </button>

      {result !== null && (
        <div className="mt-4">Result: <strong>{result}</strong></div>
      )}

      {message && (
        <div className="mt-2 text-red-600">{message}</div>
      )}
    </div>
  );
}