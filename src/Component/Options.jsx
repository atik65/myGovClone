import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { MdSpeakerNotes } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { BiMessageSquare } from "react-icons/bi";
import { BsPencil } from "react-icons/bs";
const Options = () => {
  return (
    <>
      <div className="option">
        <div className="row mx-0">
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <BsCloudDownload />
            </div>
            <div className=" option-heading">ফরম ডাউনলোড </div>
          </div>
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <CgNotes />
            </div>
            <div className=" option-heading"> সেবা প্রদান প্রতিশ্রুতিসমূহ </div>
          </div>
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <MdSpeakerNotes />
            </div>
            <div className=" option-heading">আবেদনের সর্বশেষ অবস্থা </div>
          </div>
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <FaBrain />
            </div>
            <div className=" option-heading">সেবার মানোন্নয়নে পরামর্শ </div>
          </div>
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <BiMessageSquare />
            </div>
            <div className=" option-heading">এই প্ল্যাটফরম সম্পর্কে মতামত</div>
          </div>
          <div className="px-0 col-md-2 single-option">
            <div className=" option-logo">
              <BsPencil />
            </div>
            <div className=" option-heading"> অভিযোগ দাখিল করুন </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Options;
