import { useState } from "react"

function App() {

  const [counter, setCounter] = useState(0);

  checkIfZero();

  function increment() {
    setCounter(counter + 1)
  }

  function reduction() {
    setCounter(counter - 1)
  }

  function checkIfZero(){
    if(counter < 0)
      setCounter(counter == 0)
  }

  return (
    <div>
        <header>
          <img src='duck.jpg' alt="My Image" />
          <h1>Welcome to the product page!</h1>
        </header>
        <h3>Select product</h3>
      <div className="product">
        <label for="product">Product:</label>
        <select id="product">
          <option value="AMD Ryzen 5 3600">AMD Ryzen 5 3600 (245€)</option>
          <option value="intel i5 9600k">intel i5 9600k (199€)</option>
        </select>
      </div>
      <div className="quantity">
        <p>Quantity:</p>
        <button onClick={reduction}>-</button>
        <p>{counter}</p>
        <button onClick={increment}>+</button>
      </div>
      <h2>Order Info</h2>
  <table>
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td id="product-name"></td>
        <td id="product-quantity"></td>
        <td id="product-total"></td>
      </tr>
    </tbody>
  </table>
    </div>
  )
}

export default App
