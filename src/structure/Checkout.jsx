import { useSelector } from "react-redux";
import { useState } from "react";
import PaystackPayment from "./PaystackPayment";

function Checkout() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const handlePaymentSuccess = (reference) => {
    console.log("Payment successful!", reference);
    alert("Payment successful!");
    // Perform post-payment actions here, like updating your database
  };
  const cart = useSelector((state) => state.cart.carts);
  console.log(cart);

  const totalItemAmount = cart.reduce(
    (total, photo) => total + photo.price * photo.itemQuantity,
    0
  );

  const isFormValid = () => {
    return firstName && lastName && email && phone;
  };


  return (
    <div>
      <div className="sm:mx-16 mx-3">
        <blockquote className="uppercase text-sm mt-28 mb-8">
          <b className="text-zinc-400 font-semibold ">home / </b>
          <b>checkout</b>
        </blockquote>

        <div>
          <h1 className="text-3xl font-semibold">Billing Details</h1>

          <form action="" className="mt-8">
            <blockquote className="flex max-sm:flex-col md:flex-row">
              <div>
                <label htmlFor="" className="text-sm">
                  First Name<span className="text-red-600 ">*</span>
                </label>
                <br />
                <input
                  type="text"
                  value={firstName}
                  className="border-[1px] w-[21rem] h-8 mb-2 mr-6"
                  required
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="" className="text-sm">
                  Last Name<span className="text-red-600 ">*</span>
                </label>
                <br />
                <input
                  type="text"
                  value={lastName}
                  className="border-[1px] w-[21rem] h-8 mb-2"
                  required
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </blockquote>
            <label htmlFor="" className="text-sm">
              Street Address<span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="text"
              placeholder=" House number and street name"
              className="border-[1px] w-1/2 h-8 mb-2 text-sm"
            />
            <br />
            <label htmlFor="" className="text-sm">
              Town / City<span className="text-red-600">*</span>
            </label>
            <br />
            <input
              type="text"
              className="border-[1px] w-1/2 h-8 mb-2 text-sm"
            />
            <br />

            <blockquote className="flex max-sm:flex-col md:flex-row">
              <div>
                {" "}
                <label htmlFor="" className="text-sm">
                  Phone<span className="text-red-600">*</span>
                </label>
                <br />
                <input
                  type="number"
                  value={phone}
                  className="border-[1px] w-72 h-8 mb-2 text-sm mr-6"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                {" "}
                <label htmlFor="" className="text-sm">
                  Email Address<span className="text-red-600">*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-[1px] w-96  h-8 mb-2 text-sm"
                />
              </div>
            </blockquote>
          </form>
        </div>

        <div>
          <h1 className="text-3xl font-semibold mt-8 ">Your Order</h1>

          <div className="">
            <blockquote className="grid grid-cols-2 gap-32 py-3 px-3 text-sm mt-8 font-semibold border-[1px]">
              <p>Product</p>
              <p>Total</p>
            </blockquote>

            {cart?.map((photo) => (
              <div
                key={photo.id}
                className=" grid grid-cols-2 gap-32 py-3 px-6 text-[8px] sm:text-xs text-zinc-600 border-b-[1px] border-x-[1px] "
              >
                <p className="">{photo.description}</p>
                <p>${photo.price.toFixed(2)}</p>
              </div>
            ))}

            <blockquote className="grid grid-cols-2 gap-32 py-3 px-2 text-xs border-b-[1px] border-x-[1px] ">
              <p className="text-zinc-600"> Subtotal</p>
              <p className="">${totalItemAmount.toFixed(2)}</p>
            </blockquote>

            <button
              className="uppercase bg-amber-700 text-zinc-100 px-8 py-4 mt-6 mb-10"
              disabled={isFormValid()}
            >
              <PaystackPayment
                amount={totalItemAmount} // Amount in your currency
                email={email}
                name={`${firstName} ${lastName}`}
                phone={phone}
                onSuccess={handlePaymentSuccess}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
