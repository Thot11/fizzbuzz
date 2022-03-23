import { useState } from "react"

const FizzBuzz = () => {
  const [inputValue, setInputValue] = useState<number>(0);
  const [finalNumber, setFinalNumber] = useState<number>(0);

  const submitNumber = () => {
    setFinalNumber(inputValue);
    setInputValue(0);
  }

  return (
    <div className="feezbuzzContainer">
      <input type="number" value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value)) } />
      <button onClick={() => submitNumber()}>Submit</button>
      <div className="result">
        {Array.from(Array(finalNumber + 1), (number, key) => {
          if(key !== 0) {
            return (
              <p key={key}>{key%2 !== 0 && key%5 !== 0 && key}{key%2 === 0 && 'fizz'}{key%5 === 0 && 'buzz'}</p>
            )
          }
        })}
      </div>
    </div>
  )
}

export default FizzBuzz;