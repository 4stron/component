import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checked, setChecked] = useState(false);

  //Sends an alert if checkbox is clicked.
  const handleChange = () => {
    setChecked(!checked);
    !checked ?
      alert("The product quantity will now be reset if the product is changed.")
    : 
      alert("The product quantity wont be reset now if the product is changed.")
  };

  //Adds 1 to quantity
  function increment() {
    setCounter(counter + 1);
  }

  //Adds 5 to quantity
  function incrementfive() {
    setCounter(counter + 5);
  }

  //Deducts 1 from quantity
  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  //Deducts 5 from quantity 
  function decrementfive() {
    if (counter > 4) {
      setCounter(counter - 5);
    }
    else {
      setCounter(0)
    }

  }

  //Sets new product if changed and resets quantity to 0 if checkbox is checked.
  function handleProductChange(event) {
    const newProduct = event.target.value;
    if (newProduct !== selectedProduct && checked) {    
        setCounter(0);  
    }
    setSelectedProduct(newProduct);
  }

  //Resets counter
  function resetCounter() {
    setCounter(0);
  }

  //Calculates total product price
  function calculateTotal() {
    const productPrice = getProductPrice(selectedProduct);
    if (productPrice) {
      return productPrice * counter;
    }
    return 0;
  }

  //Product prices
  function getProductPrice(productName) {
    const productPrices = {
      "AMD Ryzen 5 3600": 245,
      "intel i5 9600k": 199,
    };
    return productPrices[productName];
  }

  const isDisabled = !selectedProduct;

  return (
    <div className="main">
      <header>
        <img src="duck.jpg" alt="picture of a rubber duck" />
        <h1>Welcome to the product page!</h1>
      </header>
      <h3>Select product</h3>
      <div className="product">
        <label>Product:</label>
        <select id="product" onChange={handleProductChange}>
          <option value="">Select a product</option>
          <option value="AMD Ryzen 5 3600">AMD Ryzen 5 3600 (245€)</option>
          <option value="intel i5 9600k">intel i5 9600k (199€)</option>          
        </select>
        <input type="checkbox" checked={checked} onChange={handleChange}
        />
      </div>
      <div className="quantity">
        <p>Quantity:</p>
        <button disabled={isDisabled || counter === 0} onClick={decrementfive}>
          -5
        </button>
        <button disabled={isDisabled || counter === 0} onClick={decrement}>
          -
        </button>
        <p>{counter}</p>
        <button disabled={isDisabled} onClick={increment}>
          +
        </button>
        <button disabled={isDisabled} onClick={incrementfive}>
          +5
        </button>
        <button onClick={resetCounter}>Reset</button>
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
            <td>{selectedProduct}</td>
            <td>{counter}</td>
            <td>{calculateTotal()}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
//branch test
export default App;