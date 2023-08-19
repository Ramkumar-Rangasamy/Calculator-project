import {useState,useRef} from "react";
import "./App.css";

function App() {

  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  };

  function minus(e) {
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  };

  function times(e) {
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  };

  function divide(e) {
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  };

  function resetInput(e) { 
    e.preventDefault();
    inputRef.current.value = 0;
  };

  function resetResult(e) {
    e.preventDefault();
    setResult((preVal) => preVal * 0);
  };

  //current year only showing changing automatically
  const year= new Date();

  return (

    <div className="App">
      <div className="main-calculator">
        <div className="calculator">
          <h1>Simplest Working Calculator</h1>
        </div>
        <form>
          <p ref={resultRef}>
            {/* add the value of the current total */}
            {result}
          </p>
          <input
            pattern="[0-9]"
            ref={inputRef}
            type="number"
            placeholder="Type a number"
          />
          <div className="but">

            <button onClick={plus}>add</button>
            <button onClick={minus}>subtract</button>
            <button onClick={times}>multiply</button>
            <button onClick={divide}>divide</button>
            <button onClick={resetInput}>reset input</button>
            <button onClick={resetResult}>reset result</button>

          </div>
        </form>
      </div>
      <footer class="footer">  
      
        <div class="footer-col">
          <div>
            <p>Learn to calculate every step you make, every word you say,
               and every action you take. Life without numbers is inconceivable for us.</p>
          </div>
          <h4>follow us</h4>
          
          <div>
            <p>Copyright &copy; 2023 - {year.getFullYear()},Calculator,All rights reserved .</p>
            <p>Powered by Ramkumar R .</p>
          </div>
        </div>
      </footer> 

    </div>
    
    
  );
}

export default App; 






