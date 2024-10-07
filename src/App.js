import "./App.css";

function App() {
  return (
    <div className="container">
      <BillInput />
      <SelectPercentage id="myPerc">
        How did you like this service?
      </SelectPercentage>
      <SelectPercentage id="friendPerc">
        How did your friend like this service?
      </SelectPercentage>
      <Result />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <>
      <label htmlFor="billInput">How much was this bill?</label>
      <input type="number" placeholder="number..." id="billInput"></input>
    </>
  );
}

function SelectPercentage({ children, id }) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <select id={id}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely amazing! (20%)</option>
      </select>
    </>
  );
}

function Result() {
  return (
    <h3 className="result">
      You pay <span>${100}</span> (<span>${100}</span> + <span>${0}</span> tip)
    </h3>
  );
}

function Reset() {
  return <button>Reset</button>;
}
export default App;
