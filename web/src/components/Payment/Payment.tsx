import React, { FC, useEffect, useState } from "react";
import "./Payment.css";

interface PaymentProps {}

function Payment() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    //todo add payment validation against backend to prevent manual routin or add routing guard

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return <div className="Payment">{message}</div>;
}

export default Payment;
