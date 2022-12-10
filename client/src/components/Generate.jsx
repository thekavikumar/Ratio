import React from "react";
import Navbar from "./Navbar";

function Order() {
  let [details, setDetails] = React.useState({
    username: "",
    phonenumber: "",
    address1: "",
    address2: "",
    region: "",
    country: "",
    document: "",
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

  const addDetails = () => {
    // add firebase code to save details state.
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
              <label for="myfile" className="flex items-center">
                <span className="text-white mr-4">Upload Documnet</span>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAb1BMVEX///8UFBQAAAB0dHSxsbEODg42NjYtLS2urq5paWlxcXERERFsbGzv7+9GRkYHBwfAwMCmpqYjIyP5+fno6Oja2tpcXFzg4ODMzMx7e3uWlpbU1NSDg4Pm5uaKiooeHh5XV1dPT087OzugoKBhYWFvMAPCAAAEAklEQVR4nO3da3OiMBSHcXIqWstar9W21stevv9nXLAVk5TLCQkksf/n1c50hzm/sdAIKEmCEEIIIYQQQgghhBBCCCH0Q3ua/PI9Qr+dKaWp7yF6bP1MQog7Jq4nBfCOiRvxCcyJ/3zP0ksv87m4Rlvf0/TQK6XiFp19z+O8hQLMib99T+S4EWVCjZ59z+S0JYlv0fPa91juOlYAc+KfuyG+VQJz4njmezQ3/aoB5sTJXRC3tcCceIqf+LkUrW0uNr4ntGw2aQTmxPTge0arNqcbkG6LtrnEntPO95QW7SQVvZWHVOmfeSm9+J6zc/JSlJ6Sh1L4kDwpxL3vSTu2UIGKUCO++p61U/JStACqwjsgLmXg5U29KkymEjGjhd9pO/Quzf911kITRk6UD5b0df5QFyrLuYxG/qbtkPzyXPbBom9CZV/MaOlr2g6dq4AVQoUo6K+fac1TlqI3YJUwTuJsXLEPFlUJ1bdW9D78uObJS1H13G+lUNllBR2HHte8nXRWVDu5XS3UiB/DjmveXj5pKO2DRTVCbV9UfxZciwZgrVAjBn31TTkrqgPrhRox4Os2SwX47bWoF2pH1GCv27y3vBINQu1wE+h1m4+2X7UmoUY89z5th6ath4tGofaLGuB1m7MyoH6QudQs1A43wV23eW4HtgnDJh4ZwFahRgxrjdr8Z+KrVqH2lrivYbt0qFtsK7UL1XfOIZ3v30hntusXXQyh/CpSUBdtxHU5WrcPFnGEt30xFe7HtOh6FbsJyBOWxNBO20wpzbK0+a0PT5j/t8umglt/P46Jxs0nBJnCZFRs6tHlcI6atR0ZuELGpgKNL4w1COMPwviDMP4gjD8I4w/C+IMw/iCMPwjjD8L4gzD+IIw/COMPQr/N9vafv3Ip3O3dXp7abIloZXtR1p1wucrn2Tq8k+FAxWyp7f27zoQfl7tYidx9cvF6w5PlZ8xcCV+v4zi7beqlnMzu9l1XwvKOFGcfXByVN4CMrbbjSjgub21x9UGim3BitR1XwgmExkHIDUJuEJoHITcIuUFoHoTcIOQGoXkQcoOQG4TmQcgNQm4QmgchNwi5QWgehNwg5AaheRByg5AbhOZByA1CbhCaByE3CLlBaB6E3CDkFq6w/OpIy1txwxUuSqHdN8yHK0wmn1+iPLfdTLjCA1EqUuv7swMWJuvjiU5H2yd1hSx0E4TmQTh0EJoH4dBBaB6EQweheRAOHYTmQTh0EJoH4dBBaB6EQweheRAOXY/CbDV69N9olfUmFBmFUPnkpR6EgQUhhD9IuAhW6Op57DP5uXEBlbl7btkxzBfR5QOgp0RpaJHbp3ottuPQ2rraCRFCCCGEEEIIIYQQQgghhAbqP5FQO/RQDf06AAAAAElFTkSuQmCC"
                  className="h-7 w-7 rounded-md cursor-pointer"
                />
              </label>
              <input
                type="file"
                id="myfile"
                name="document"
                value={details.document}
                onChange={saveDetails}
              />
              <input
                className="submitBtn"
                type="submit"
                value="details"
                onClick={addDetails}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Order;
