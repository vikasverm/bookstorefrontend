import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faHeart } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Footer from "./Footer";
// eslint-disable-next-line react/prop-types
export default function CartList({ remove, CART }) {
  const navigate = useNavigate();

  const additem = (toDoId, itemQuantity) => {
    axios
      .put("http://127.0.0.1:9000/update", {
        _id: toDoId,
        itemQuantity: itemQuantity + 1,
      })
      .then((res) => {
        console.log(res);
      });
  };

  //payment integration
  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51Oa1TBSHbkVoXBAuTylzDFkmVMeKdAhtwxnAgcbC6lOH1aDfJQPJHIQU8ZBuJTBdkfcvnmX424IsZFPRdf89t3XC00lF9GZpZw"
    );
    const body = {
      products: CART,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    const response = await fetch(
      "http://localhost:9000/api/create-checkout-session",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(body),
      }
    );
    const session = await response.json();
    const result = stripe.redirectToCheckout({ sessionId: session.id });
    if (result.error) {
      console.log(result.error);
    }
  };
  const subitem = (toDoId, itemQuantity) => {
    if (itemQuantity >= 2) {
      axios
        .put("http://127.0.0.1:9000/update", {
          _id: toDoId,
          itemQuantity: itemQuantity - 1,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  const BacktoShop = () => {
    navigate("/Featured");
  };

  // eslint-disable-next-line react/prop-types

  // eslint-disable-next-line react/prop-types
  let result = CART.map((i) => i.itemPrice * i.itemQuantity);

  const incomeValue = result.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <>
    
      <div className="bg-gray-100">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl mb-4 flex justify-center font-bold">
            Shopping Cart
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4 pb-20">
              {
                // eslint-disable-next-line react/prop-types
                CART?.map((cartItem, cartIndex) => {
                  return (
                    <ul key={cartIndex} className="">
                      <li className="bg-white rounded-lg shadow-md p-3 mb-2">
                        <div className="flex w-full space-x-2 sm:space-x-4">
                          <img
                            className="h-20 w-20 flex-shrink-0 rounded object-contain outline-none dark:border-transparent sm:h-24 sm:w-32"
                            src={cartItem.itemUrl}
                          />
                          <div className="flex w-full flex-col justify-between pb-1">
                            <div className="flex w-full justify-between space-x-2 pb-1">
                              <div className="space-y-1">
                                <p className="text-sm font-bold leading-snug sm:pr-8">
                                  {cartItem.itemName}{" "}
                                </p>
                                <p className="text-sm">{cartItem.itemGenres}</p>
                                <button
                                  onClick={() =>
                                    subitem(cartItem._id, cartItem.itemQuantity)
                                  }
                                  className="rounded-md border border-black px-2 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                  -
                                </button>
                                <span>{cartItem.itemQuantity}</span>
                                <button
                                  onClick={() =>
                                    additem(
                                      cartItem._id,
                                      cartItem.itemQuantity,
                                      cartItem.itemPrice
                                    )
                                  }
                                  className="rounded-md border border-black px-2 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                  +
                                </button>
                              </div>
                              <div className="text-right">
                                <p className="text-lg font-semibold">
                                  ₹{cartItem.itemPrice * cartItem.itemQuantity}
                                </p>
                              </div>
                            </div>
                            <div className="flex divide-x text-sm">
                              <button
                                onClick={() => remove(cartItem._id)}
                                type="button"
                                className="flex items-center space-x-2 px-2 py-1 pl-0"
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                  className="h-4 text-red-600"
                                />

                                <span>{cartItem.itemName}</span>
                              </button>
                              <button
                                type="button"
                                className="flex items-center space-x-2 px-2 py-1"
                              >
                                <FontAwesomeIcon
                                  icon={faHeart}
                                  className=" text-slate-400 hover:text-red-600"
                                />

                                <span>Add to favorites</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  );
                })
              }
            </div>
            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>₹{(incomeValue * 90) / 100}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax Included</span>
                  <span>₹{(incomeValue * 10) / 100}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span className="text-green-600 font-bold">Free</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">₹{incomeValue}</span>
                </div>
                <button
                  onClick={BacktoShop}
                  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Back To Shop
                  </span>
                  <span className="relative invisible">Button Text</span>
                </button>
                <button
                  onClick={makePayment}
                  className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-yellow-500 rounded-full shadow-md group"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-yellow-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Continue
                  </span>
                  <span className="relative invisible">Button Text</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
