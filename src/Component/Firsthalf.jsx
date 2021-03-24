import React, { useState } from "react";
import background from "../Component/img/slider.jpg";
import { FaSearchengin } from "react-icons/fa";

const Firsthalf = () => {
  let [searchData, setSearchData] = useState();
  let [data, setData] = useState();
  let search = (event) => {
    setSearchData(event.target.value);
  };

  let click = () => {
    setData(searchData);
    setSearchData("");
  };

  return (
    <div>
      <div className="slider">
        <div className="slider-info">
          <span>সহজ ও দ্রুত সেবা অনুসন্ধান</span>
          <div className="d-flex justify-content-center">
            <input
              type="text"
              class="form-control"
              name="search"
              value={searchData}
              onChange={search}
              placeholder="সেবার নাম, খাত, দপ্তর"
            />
            <p>
              <FaSearchengin onClick={click} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Firsthalf;
