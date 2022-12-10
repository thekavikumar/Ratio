import React from "react";
import Navbar from "./Navbar";
import "./Generate.css";

function Generate() {
  const [order, setOrder] = React.useState({
    privatekey: "",
    rice: false,
    sugar: false,
    oil: false,
  });

  const toggleChecked = (e) => {
    let { name, checked } = e.target;
    console.log(name, checked);
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

  const addOrder = () => {
    // firebase code for order state.
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div className="parent flex justify-center items-center mt-[100px]">
        <div className="box">
          <div className="form">
            <h2 className="text-[22px] font-semibold text-[#45f3ff] text-center tracking-[0.1em]">
              Order
            </h2>

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
            <div className="flex flex-col items-start text-white py-4">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="rice"
                  id="rice"
                  checked={order.rice}
                  onChange={toggleChecked}
                />
                <label for="rice">Rice</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  name="sugar"
                  id="sugar"
                  checked={order.sugar}
                  onChange={toggleChecked}
                />
                <label for="sugar">Sugar</label>
              </div>
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  id="oil"
                  name="oil"
                  checked={order.oil}
                  onChange={toggleChecked}
                />
                <label for="oil">Oil</label>
              </div>
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

export default Generate;
