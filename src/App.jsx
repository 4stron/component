import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  function handleProductChange(event) {
    setSelectedProduct(event.target.value);
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
    <div>
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
      </div>
      <div className="quantity">
        <p>Quantity:</p>
        <button disabled={isDisabled || counter === 0} onClick={decrement}>
          -
        </button>
        <p>{counter}</p>
        <button disabled={isDisabled} onClick={increment}>
          +
        </button>
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