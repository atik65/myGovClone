import React from "react";
import Logo from "../Component/img/atik.png";
const Footer = () => {
  return (
    <>
      <div className="footer ">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="row">
                <div className="col-md-5 col-12 my-auto text-center pb-3">
                  পরিকল্পনা ও বাস্তবায়ন
                </div>
                <div className="col-md-7 col-12 pb-3">
                  <img src={Logo} alt="logo" />
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 text-center pl-md-5 pb-4">
              কপিরাইট &copy; ২০২১ সর্বস্বত্ব সংরক্ষিত <br />
              গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
            </div>
            <div className="col-md-3 col-12 text-center text-md-right">
              কারিগরি সহযোগিতায় <br />
              <a
                href="https://www.facebook.com/atik.selfibazz/"
                target="_blank"
              >
                আতিক হাসান 😃
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
