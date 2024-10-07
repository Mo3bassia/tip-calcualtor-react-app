import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [myPerc, setMyPerc] = useState(0);
  const [friendPerc, setFriendPerc] = useState(0);
  return (
    <>
      <div className="container">
        <BillInput bill={bill} setBill={setBill} />
        <SelectPercentage id="myPerc" perc={myPerc} setPerc={setMyPerc}>
          How did you like this service?
        </SelectPercentage>
        <SelectPercentage
          id="friendPerc"
          perc={friendPerc}
          setPerc={setFriendPerc}
        >
          How did your friend like this service?
        </SelectPercentage>
        <Result bill={bill} averagePerc={(myPerc + friendPerc) / 2 / 100} />
        <Reset
          setBill={setBill}
          setMyPerc={setMyPerc}
          setFriendPerc={setFriendPerc}
        />
      </div>
      <Footer />
    </>
  );
}

function BillInput({ bill, setBill }) {
  return (
    <>
      <label htmlFor="billInput">How much was this bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) =>
          e.target.value >= 0 ? setBill(+e.target.value) : setBill(0)
        }
        placeholder="number..."
        id="billInput"
      ></input>
    </>
  );
}

function SelectPercentage({ children, id, perc, setPerc }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <select id={id} value={perc} onChange={(e) => setPerc(+e.target.value)}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Result({ bill, averagePerc }) {
  let total = bill + averagePerc * bill;
  return (
    <h3 className="result">
      You pay <span>${total}</span> (<span>${bill}</span> +{" "}
      <span>${averagePerc * bill}</span> tip)
    </h3>
  );
}

function Reset({ setBill, setFriendPerc, setMyPerc }) {
  function handleReset() {
    setBill(0);
    setMyPerc(0);
    setFriendPerc(0);
  }

  return <button onClick={handleReset}>Reset</button>;
}

function Footer() {
  return (
    <footer className="footer">
      <p>
        Made with ❤️ by{" "}
        <a href="https://github.com/Mo3bassia" target="_blank">
          Mo3bassia
        </a>
      </p>
      <p>
        Built using <strong>React</strong>. Feel free to explore and connect!
      </p>
    </footer>
  );
}
export default App;
