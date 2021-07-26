import "./styles.css";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [cashGiven, setcashGiven] = useState(0);
  let [changes, setChanges] = useState(0);
  const [givenNote, setGivenNote] = useState([]);

  const notes = [2000, 500, 100, 20, 10, 5, 1];

  function changesgiven() {
    setChanges(cashGiven - bill);
    let changes = cashGiven - bill;
    let i = 0;
    let j = 0;
    let arr = [];
    while (changes > 0 && j < notes.length) {
      var note = Math.floor(changes / notes[i]);
      changes = changes % notes[i];

      if (note > 0) {
        console.log(`the note of ${notes[i]} is ${note}`);
        arr[j] = `The note of ₹${notes[i]} is ${note}`;
        j++;
      }
      console.log(arr);
      i++;
    }
    setGivenNote(arr);
  }

  return (
    <div className="App">
      <h1>Cash Register App</h1>
      <h2>This app will give you return change</h2>
      <div className="form">
        <label>Bill amount</label>
        <input type="number" onChange={(e) => setBill(e.target.value)} />
        {bill && (
          <>
            <label>Cash given</label>
            <input
              type="number"
              onChange={(e) => setcashGiven(e.target.value)}
            />
          </>
        )}
        <button onClick={changesgiven}>Check</button>
      </div>
      <h2 style={{ margin: "0" }}>Total Return cash: {changes}</h2>
      <div>
        <ul>
          {givenNote.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <p>Made with ❤️ by Mahendra😄</p>
    </div>
  );
}
