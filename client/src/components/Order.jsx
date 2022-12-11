import React from "react";
import Navbar from "./Navbar";
import "./Generate.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";

function Order() {
  const [order, setOrder] = React.useState({
    username: "",
    privatekey: "",
    rice: false,
    sugar: false,
    oil: false,
    pencil: false,
    book: false,
  });

  let ricePrice = 100;
  let sugarPrice = 50;
  let oilPrice = 200;
  let pencilPrice = 10;
  let bookPrice = 50;
  const [total, setTotal] = React.useState(0);
  const toggleChecked = (e) => {
    let { name, checked } = e.target;
    console.log(name, checked);
    if (name === "rice" && checked === true) {
      setTotal(total + ricePrice);
    }
    if (name === "sugar" && checked === true) {
      setTotal(total + sugarPrice);
    }
    if (name === "oil" && checked === true) {
      setTotal(total + oilPrice);
    }
    if (name === "pencil" && checked === true) {
      setTotal(total + pencilPrice);
    }
    if (name === "book" && checked === true) {
      setTotal(total + bookPrice);
    }
    if (name === "rice" && checked === false) {
      setTotal(total - ricePrice);
    }
    if (name === "sugar" && checked === false) {
      setTotal(total - sugarPrice);
    }
    if (name === "oil" && checked === false) {
      setTotal(total - oilPrice);
    }
    if (name === "pencil" && checked === false) {
      setTotal(total - pencilPrice);
    }
    if (name === "book" && checked === false) {
      setTotal(total - bookPrice);
    }
    setOrder((prev) => {
      return {
        ...prev,
        [name]: checked,
      };
    });
  };

  const editOrder = (e) => {
    let { name, value } = e.target;
    setOrder((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const addOrder = async (e) => {
    // firebase code for order state.
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, `orders`), {
        order: order,
      });
      console.log("Document written with ID: ", docRef.id);
      const notify = () => toast("Order Has Been Placed!");
      notify();
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="parent flex justify-center items-center mt-[100px]">
        <ToastContainer />
        <div className="box">
          <div className="form">
            <h2 className="text-[22px] font-semibold text-[#45f3ff] text-center tracking-[0.1em]">
              Order
            </h2>

            <div className="inputBox">
              <input
                type="text"
                required
                name="username"
                value={order.username}
                onChange={editOrder}
              />
              <span>Username</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input
                type="text"
                required
                name="privatekey"
                value={order.privatekey}
                onChange={editOrder}
              />
              <span>Private Key</span>
              <i></i>
            </div>
            <div className="flex flex-row itemss text-white py-4">
              <div className="flex gap-1 ml-5 items-center mb-3">
                <input
                  type="checkbox"
                  name="rice"
                  id="rice"
                  checked={order.rice}
                  onChange={toggleChecked}
                />
                <label htmlFor="rice">Rice</label>
              </div>
              <div className="flex gap-1 ml-5 items-center mt-[-10px]">
                <input
                  type="checkbox"
                  name="sugar"
                  id="sugar"
                  checked={order.sugar}
                  onChange={toggleChecked}
                />
                <label htmlFor="sugar">Sugar</label>
              </div>
              <div className="flex gap-1 ml-5 items-center mt-[-10px]">
                <input
                  type="checkbox"
                  id="oil"
                  name="oil"
                  checked={order.oil}
                  onChange={toggleChecked}
                />
                <label htmlFor="oil">Oil</label>
              </div>
              <div className="flex gap-1 ml-5 items-center">
                <input
                  type="checkbox"
                  id="pencil"
                  name="Pencil"
                  checked={order.pencil}
                  onChange={toggleChecked}
                />
                <label htmlFor="pencil">Pencil</label>
              </div>
              <div className="flex gap-1 ml-5 items-center">
                <input
                  type="checkbox"
                  id="book"
                  name="book"
                  checked={order.book}
                  onChange={toggleChecked}
                />
                <label htmlFor="book">Book</label>
              </div>
            </div>
            <div className="mt-[-5px]">
              <label className="text-white">Total HBar: {total}</label>
            </div>
            <input
              className="submitBtn"
              type="submit"
              value="Order"
              onClick={addOrder}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
