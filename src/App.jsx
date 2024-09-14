import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    if (!checked) {
      alert("The product quantity will now be reset if the product is changed.")
    }
    else {
      alert("The product quantity wont be reset now if the product is changed.")
    }
  };

  function increment() {
    setCounter(counter + 1);
  }

  function incrementfive() {
    setCounter(counter + 5);
  }

  function decrementfive() {
    if (counter > 4) {
      setCounter(counter - 5);
    }
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleProductChange(event) {
    const newProduct = event.target.value;
    if (newProduct !== selectedProduct && checked) {    
        setCounter(0);  
    }
    setSelectedProduct(newProduct);
  }

  function resetCounter() {
    setCounter(0);
  }

  function calculateTotal() {
    const productPrice = getProductPrice(selectedProduct);
    if (productPrice) {
      return productPrice * counter;
    }
    return 0;
  }

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
        <label htmlFor="product">Product:</label>
        <select id="product" onChange={handleProductChange}>
          <option value="">Select a product</option>
          <option value="AMD Ryzen 5 3600">AMD Ryzen 5 3600 (245€)</option>
          <option value="intel i5 9600k">intel i5 9600k (199€)</option>
          
        </select>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </div>
      <div className="quantity">
        <p>Quantity:</p>
        <button disabled={isDisabled || counter < 5} onClick={decrementfive}>
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
            <td id="product-name">{selectedProduct}</td>
            <td id="product-quantity">{counter}</td>
            <td id="product-total">{calculateTotal()}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;