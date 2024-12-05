import { useSelector } from "react-redux";
import { useState } from "react";
import PaystackPayment from "./PaystackPayment";

function Checkout() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [formValid, setFormValid] = useState(false);

  const cart = useSelector((state) => state.cart.carts);
  const totalItemAmount = cart.reduce(
    (total, photo) => total + photo.price * photo.itemQuantity,
    0
  );

  const validateForm = () => {
    if (!firstName || !lastName || !email || !phone) {
      setFormValid(false);
      return false;
    }
    // Basic email and phone validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;
    if (!emailRegex.test(email) || !phoneRegex.test(phone)) {
      alert("Please provide a valid email and phone number.");
      setFormValid(false);
      return false;
    }
    setFormValid(true);
    return true;
  };

  const handlePaymentSuccess = (reference) => {
    console.log("Payment successful!", reference);
    alert("Payment successful!");
    // Perform post-payment actions here
  };

  const handleCheckout = () => {
    if (!validateForm()) return;
    // Trigger Paystack payment flow
  };

  return (
    <div>
      <div className="sm:mx-16 mx-3">
        <blockquote className="uppercase text-sm mt-28 mb-8">
          <b className="text-zinc-400 font-semibold">home / </b>
          <b>checkout</b>
        </blockquote>

        <div>
          <h1 className="text-3xl font-semibold">Billing Details</h1>

          <form className="mt-8">
            <div className="flex flex-wrap md:flex-nowrap">
              <div>
                <label className="text-sm">
                  First Name<span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  type="text"
                  value={firstName}
                  className="border-[1px] w-[21rem] h-8 mb-2 mr-6"
                  onChange={(e) => setFirstName(e.target.value)}
                  onBlur={validateForm}
                  required
                />
              </div>

              <div>
                <label className="text-sm">
                  Last Name<span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  type="text"
                  value={lastName}
                  className="border-[1px] w-[21rem] h-8 mb-2"
                  onChange={(e) => setLastName(e.target.value)}
                  onBlur={validateForm}
                  required
                />
              </div>
            </div>

            <label className="text-sm">
              Email Address<span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="email"
              value={email}
              className="border-[1px] w-96 h-8 mb-2 text-sm"
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateForm}
              required
            />
            <br />

            <label className="text-sm">
              Phone<span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="tel"
              value={phone}
              className="border-[1px] w-72 h-8 mb-2 text-sm"
              onChange={(e) => setPhone(e.target.value)}
              onBlur={validateForm}
              required
            />
          </form>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mt-8">Your Order</h1>

          {cart?.length ? (
            <div>
              {cart.map((photo) => (
                <div
                  key={photo.id}
                  className="grid grid-cols-2 gap-32 py-3 px-6 text-xs text-zinc-600 border-b-[1px]"
                >
                  <p>{photo.description}</p>
                  <p>${photo.price.toFixed(2)}</p>
                </div>
              ))}
              <div className="grid grid-cols-2 gap-32 py-3 px-2 text-xs border-b-[1px]">
                <p className="text-zinc-600">Subtotal</p>
                <p>${totalItemAmount.toFixed(2)}</p>
              </div>
            </div>
          ) : (
            <p className="text-red-600 mt-4">Your cart is empty.</p>
          )}

          <button
            className={`uppercase px-8 py-4 mt-6 ${
              formValid
                ? "bg-amber-700 text-white"
                : "bg-gray-400 text-gray-700 cursor-not-allowed"
            }`}
            onClick={handleCheckout}
            disabled={!formValid}
          >
            <PaystackPayment
              amount={totalItemAmount * 100} // Amount in kobo
              email={email}
              name={`${firstName} ${lastName}`}
              phone={phone}
              onSuccess={handlePaymentSuccess}
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
