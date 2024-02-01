import { sendPasswordResetEmail } from "firebase/auth";
import { FormEvent, useState } from "react";
import { getAuth } from "firebase/auth";
import React from "react";
import { app } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function ForgotPassword() {
  const auth = getAuth(app);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await sendPasswordResetEmail(auth, email);
      setEmailMessage(true);
    } catch (error: any) {
      if (error.code === "auth/user-not-found") {
        alert("User not found, try again!");
        setEmail("");
      }
    }
  };
  const removeElement = () => {
    setVisible((prev) => !prev);
    navigate("/");
  };
  return (
    <div>
      {visible && (
        <div
          id="login-popup"
          className="bg-black/50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 h-full items-center justify-center flex"
        >
          <div className="relative p-4 w-full max-w-md h-full md:h-auto">
            <div className="relative  shadow">
              {emailMessage ? (
                <h3>The Email has been sent; Check your Inbox!</h3>
              ) : (
                <div className="antialiased bg-white">
                  <button
                    type="button"
                    onClick={removeElement}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center popup-close"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="#c6c7c7"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close popup</span>
                  </button>
                  <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                    <h1 className="text-4xl font-medium flex justify-center">
                      Reset password
                    </h1>
                    <p className="text-slate-500  flex justify-center">
                      Fill up the form to reset the password
                    </p>

                    <form onSubmit={handleSubmit} className="my-10">
                      <div className="flex flex-col space-y-5">
                        <label htmlFor="email">
                          <p className="font-medium text-slate-700 pb-2">
                            Email address
                          </p>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                            placeholder="Enter email address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </label>

                        <button
                          type="submit"
                          className="w-full py-3 font-medium text-black rounded bg-yellow-400   hover:shadow inline-flex space-x-2 items-center justify-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                            />
                          </svg>

                          <span>Reset password</span>
                        </button>
                        <p className="text-center">
                          Not registered yet?{" "}
                          <Link
                            to="/Signin"
                            className="text-indigo-600 font-medium inline-flex space-x-1 items-center"
                          >
                            <span>Register now </span>
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                />
                              </svg>
                            </span>
                          </Link>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
