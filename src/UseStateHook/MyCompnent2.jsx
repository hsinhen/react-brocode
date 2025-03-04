import { useState } from "react";

function MyComponent2() {
  const [name, setName] = useState("Guest");
  const [qty, setQty] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("gift");
  const [shipping, setShipping] = useState("lalamove");

  function handleNameChanged(event) {
    setName(event.target.value);
  }

  function handleQtyChanged(event) {
    setQty(event.target.value);
  }

  function handleCommentChanged(event) {
    setComment(event.target.value);
  }

  function handlePaymentChanged(event) {
    setPayment(event.target.value);
  }

  function handleShippingChanged(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChanged}></input>
      <p>Name: {name}</p>
      <br />

      <input
        value={qty}
        onChange={handleQtyChanged}
        type="number"
        inputMode="numeric"
      ></input>
      <p>Quantity: {qty}</p>
      <br />

      <select value={payment} onChange={handlePaymentChanged}>
        <option value="">Select an option</option>
        <option value="visa">VISA</option>
        <option value="master">MASTERCARD</option>
        <option value="amex">AMEX</option>'
        <option value="gift">Gift Card</option>'
      </select>
      <p>Payment: {payment}</p>
      <br />

      <textarea
        value={comment}
        onChange={handleCommentChanged}
        placeholder="Please enter any comment"
      ></textarea>
      <p>Comment: {comment}</p>
      <br />

      <label>
        <input
          type="radio"
          value="cod"
          checked={shipping === "cod"}
          onChange={handleShippingChanged}
        />
        Pick Up
      </label>
      <br />

      <label>
        <input
          type="radio"
          value="postage"
          checked={shipping === "postage"}
          onChange={handleShippingChanged}
        />
        Postage
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="lalamove"
          checked={shipping === "lalamove"}
          onChange={handleShippingChanged}
        />
        Lalamove
      </label>
      <p>Collection method: {shipping}</p>
    </div>
  );
}

export default MyComponent2;
