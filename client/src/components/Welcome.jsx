import React, { useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const {
    currentAccount,
    connectWallet,
    handleChange,
    sendTransaction,
    formData,
    isLoading,
  } = useContext(TransactionContext);

  const handleSubmit = (e) => {
    const { addressTo, amount, keyword, message } = formData;

    e.preventDefault();

    if (!addressTo || !amount || !keyword || !message) return;

    sendTransaction();
  };

  return (
    <div className="flex flex-col">
      <h1 className="text-gradient text-center text-[55px] mt-[10px] text-white">
        Welcome to Ratio
      </h1>
      <h1 className="text-gradient text-center text-2xl text-white">
        Prevent Misuse Of Government Resources with Blockchain Technology
      </h1>
      <h1 className="text-gradient text-center text-2xl mt-[10px] text-white"></h1>
    </div>
  );
};

export default Welcome;
