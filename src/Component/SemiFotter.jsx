import React from "react";
import Footer from "./Footer";
const SemiFotter = () => {
  return (
    <>
      <div className="container-fluid semi-footer">
        <div className="row my-auto item">
          <ul>
            <li>মাইগভ</li>
            <li>সার্বিক সহযোগিতায়</li>
            <li>গোপনীয়তার নীতিমালা </li>
            <li>ব্যাবহারের শর্তাবলি</li>
            <li>সচারচর জিজ্ঞাসা</li>
            <li>হেল্প ডেস্ক</li>
          </ul>
        </div>
      </div>

      <div className="container-fluid semi-footer-mobile">
        <div className="row my-auto">
          <ul className="mx-auto">
            <li>মাইগভ</li>
            <li>সার্বিক সহযোগিতায়</li>
          </ul>
        </div>

        <div className="row my-auto">
          <ul className="mx-auto">
            <li>গোপনীয়তার নীতিমালা </li>
            <li>ব্যাবহারের শর্তাবলি</li>
          </ul>
        </div>

        <div className="row my-auto">
          <ul className="mx-auto">
            <li>সচারচর জিজ্ঞাসা</li>
            <li>হেল্প ডেস্ক</li>
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SemiFotter;
