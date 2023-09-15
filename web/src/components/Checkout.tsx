import axios from "axios";
import { useEffect, useState } from "react";

const Checkout = () => {
  const [message, setMessage] = useState("");

  const StartSession = async () => {
    await axios
      .post("http://localhost:3000/Stripe/StartSession", {})
      .then((res) => (window.location = res.data.url));
  };

  const ProductDisplay = () => (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <button onClick={StartSession}>Checkout</button>
    </section>
  );

  const Message = ({ message }: any) => (
    <section>
      <p>{message}</p>
    </section>
  );

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
};

export default Checkout;
