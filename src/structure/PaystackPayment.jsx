
import { PaystackButton } from "react-paystack";

function PaystackPayment({ amount, email, onSuccess }) {
  const publicKey = "pk_test_86963daadaf8a70bc06b591b9b13b2299eeb3b21"; 
  const totalAmount = amount * 100; // Convert to kobo (Paystack works with the smallest currency unit)

  const componentProps = {
    email,
    amount: totalAmount,
    metadata: {
      name: "John Doe", // Replace with dynamic user data
      phone: "1234567890",
    },
    publicKey,
    text: "Place Order",
    onSuccess: (reference) => {
      console.log(reference); // Successful payment reference
      onSuccess(reference); // Call custom success handler
    },
    onClose: () => {
      console.log("Payment closed.");
    },
  };

  return <PaystackButton {...componentProps} />;
}

export default PaystackPayment;
