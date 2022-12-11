import React from "react";
import { useState } from "react";
import Navbar from "./Navbar";
import { collection, addDoc } from "firebase/firestore";
import { db, storage } from "../firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

function Generate() {
  const [documentUri, setDocumentUri] = useState("");
  let [details, setDetails] = useState({
    username: "",
    phonenumber: "",
    address1: "",
    address2: "",
    region: "",
    country: "",
  });

  const saveDetails = (e) => {
    let { name, value } = e.target;
    console.log(name);
    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const addDetails = async (e) => {
    // add firebase code to save details state.
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, `users`), {
        user: details,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div className="min-h-screen gradient-bg">
      <Navbar />
      <div>
        <div className="parent flex justify-center items-center mt-[100px]">
          <div className="box-wide">
            <div className="form">
              <h2 className="text-[22px] font-semibold text-[#45f3ff] text-center tracking-[0.1em]">
                Generate
              </h2>
              <div className="grid grid-cols-2 items-center justify-between mb-5">
                <div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="username"
                      value={details.username}
                      required
                      onChange={saveDetails}
                    />
                    <span>Username</span>
                    <i></i>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="address1"
                      value={details.address1}
                      required
                      className="h-10"
                      onChange={saveDetails}
                    />
                    <span>Address 1</span>
                    <i></i>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="region"
                      value={details.region}
                      required
                      onChange={saveDetails}
                    />
                    <span>Region</span>
                    <i></i>
                  </div>
                </div>
                <div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="phonenumber"
                      value={details.phonenumber}
                      onChange={saveDetails}
                      required
                    />
                    <span>Phone Number</span>
                    <i></i>
                  </div>

                  <div className="inputBox">
                    <input
                      type="text"
                      name="address2"
                      value={details.address2}
                      required
                      className="h-10"
                      onChange={saveDetails}
                    />
                    <span>Address 2</span>
                    <i></i>
                  </div>
                  <div className="inputBox">
                    <input
                      type="text"
                      name="country"
                      value={details.country}
                      required
                      onChange={saveDetails}
                    />
                    <span>Country</span>
                    <i></i>
                  </div>
                </div>
              </div>

              <input
                className="generate-btn"
                type="submit"
                value="Generate"
                onClick={addDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Generate;
