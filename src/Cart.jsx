import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  // clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} from "./cartContext/cartSlice";
import { useCallback } from "react";
import { Link } from "react-router-dom";


function Cart() {
  const cart = useSelector((state) => state.cart.carts);
  const dispatch = useDispatch();


  const handleRemoveFromCart = useCallback(
    (id) => {
      dispatch(removeFromCart(id));
    },
    [dispatch]
  );

  // const handleClearFromCart = useCallback(() => {
  //   dispatch(clearCart());
  // }, [dispatch]);

  const handleIncreaseQuantity = useCallback(
    (id) => {
      dispatch(increaseItemQuantity(id));
    },
    [dispatch]
  );

  const handleDecreaseQuantity = useCallback(
    (id) => {
      dispatch(decreaseItemQuantity(id));
    },
    [dispatch]
  );

  // const handleTotalPrice = cart.map(
  //   (photo) => photo.itemQuantity * photo.price
  // );

  return (
    <>
      <div className="mx-2 lg:mx-16 max-[640px]:text-xs">
        <blockquote className="uppercase text-sm tracking-tight mt-28">
          <b className="text-zinc-400 font-semibold ">home / </b>
          <b>shopping cart</b>
        </blockquote>

        <div className="">
          <blockquote className="grid grid-cols-5 mb-2 mt-12 py-4 border-b-[1px]">
            <p></p>
            <p className="font-bold">Product</p>
            <p className="font-bold">Price</p>
            <p className="font-bold">Quantity</p>
            <p className="font-bold">Total</p>
          </blockquote>

          {cart?.map((photo) => (
            <div
              key={photo.id}
              className=" grid grid-cols-5 my-4 py-4 border-b-[1px]"
            >
              <blockquote
                className=""
                onClick={() => handleRemoveFromCart(photo.id)}
              >
                <img
                  src="/images/close-icon.png"
                  alt=""
                  className="cursor-pointer w-[1rem] h-[1rem] object-cover"
                />
              </blockquote>

              <blockquote className="text-zinc-600 font-bold">
                <p>{photo.description.substring(0, 15) + "..."}</p>
              </blockquote>

              <blockquote className="text-zinc-600">
                <p>{"$" + photo.price + ".00"}</p>
              </blockquote>

              <blockquote className="">
                <button
                  className="mr-1 bg-slate-100 lg:px-2  px-[3px] border-2 hover:bg-black hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleIncreaseQuantity(photo.id);
                  }}
                >
                  +
                </button>

                {photo.itemQuantity || 0}

                <button
                  className="ml-1 bg-slate-100 lg:px-[11px] px-[5px] border-2 hover:bg-black hover:text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDecreaseQuantity(photo.id);
                  }}
                >
                  -
                </button>
              </blockquote>

              <blockquote>
                <p>${(photo.itemQuantity * photo.price).toFixed(2)}</p>
              </blockquote>
            </div>
          ))}
        </div>

        {/* <button onClick={handleClearFromCart}>Clear cart</button> */}

        <div className=" my-20 lg:w-1/3 w-full">
          <h1 className="font-bold text-3xl">Cart Totals</h1>

          <div className="my-6">
            <blockquote className="grid grid-cols-2 py-3 border-b-[1px]">
              <p className="text-zinc-600"> Subtotal</p>
              <p className="justify-self-end">
                $
                {cart
                  .reduce(
                    (total, photo) => total + photo.price * photo.itemQuantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </blockquote>

            <blockquote className="grid grid-cols-2 py-3 border-b-[1px]">
              <p className="text-zinc-600">Shipping Fee</p>
              <p className="uppercase text-zinc-600 justify-self-end">
                Free!!!
              </p>
            </blockquote>

            <blockquote className="grid grid-cols-2 py-4 ">
              <p className="font-bold">Total</p>
              <p className="justify-self-end">
                $
                {cart
                  .reduce(
                    (total, photo) => total + photo.price * photo.itemQuantity,
                    0
                  )
                  .toFixed(2)}
              </p>
            </blockquote>

            <button className="uppercase bg-amber-700 text-zinc-100 px-8 py-4 my-6">
              <Link to={"/checkout"} className="">
                Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
