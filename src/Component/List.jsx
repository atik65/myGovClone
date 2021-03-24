import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import { MdAccountBalance } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { BsLayoutTextWindow } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { AiTwotoneFileUnknown } from "react-icons/ai";
import Options from "../Component/Options";
const List = () => {
  return (
    <>
      <div className="list">
        <div className="intro mt-2 pt-1 ">
          <h4> আবেদনের জন্য সেবা নির্বাচন </h4>
        </div>
        <div className="d-flex justify-content-center mb-2">
          <AiOutlineDown className="downArrow" />
        </div>

        <div className="row mx-3 my-1 ">
          <div className="col-md-4 px-3 list-link-one">
            <div className="list-div-one">
              <div className="list-header">
                <h5>
                  <span className="pr-2">
                    <MdAccountBalance style={{ fontSize: "2.1rem" }} />
                  </span>
                  দপ্তর অনুসারে
                </h5>
              </div>
              <div className="list-body">
                <ul>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    মন্ত্রণালয়/বিভাগ
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    অধিদপ্তর/পরিদপ্তর
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    দপ্তর/সংস্থা অন্যান্য
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    বিভাগীইয় কার্যালয়
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    জেলা কার্যালয়
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    উপজেলা কার্যালয়
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    আঞ্চলিক কার্যালয়
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 px-3 my-1 list-link-two">
            <div className="list-div-two">
              <div className="list-header-two">
                <h5>
                  <span className="pr-2">
                    <BsLayoutTextWindow style={{ fontSize: "2.1rem" }} />
                  </span>
                  খাত অনুসারে
                </h5>
              </div>
              <div className="list-body">
                <ul>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ভূমি
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    লাইসেন্স
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    সনদ
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ভাতা/অনুদান/সহায়তা
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ছড়পত্র/অনাপত্তি
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    প্রত্যয়ন
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    কৃষি
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    প্রাণিসম্পদ
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ওয়াকফ
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    আবাসন
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    অভিযোগ
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    বিবিধ
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    প্রশিক্ষণ
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    বৃত্তি
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    শিক্ষা
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    সরকারি কর্মকর্তা-কর্মচারী সেবা
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    মুক্তিযোদ্ধা
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ব্যাক্তিগত আবেদন
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    অনুমতি
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    সেবা
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    অন্যান্য
                  </li>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    অর্থ ও ব্যাংক
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-4 my-1 px-3 list-link-three">
            <div className="list-div-three">
              <div className="list-header-three">
                <h5>
                  <span className="pr-2">
                    <BsPeople style={{ fontSize: "2.1rem" }} />
                  </span>
                  সেবাগ্রহীতা অনুসারে
                </h5>
              </div>
              <div className="list-body">
                <ul>
                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    নাগরিক/প্রতিষ্ঠান
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    ব্যাবসায়ী
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    সরকারি কর্মকর্তা-কর্মচারী
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    সরকারী দপ্তর
                  </li>

                  <li>
                    <span className="pr-2">
                      <AiOutlineRight />
                    </span>
                    প্রাতিষ্ঠানিক সেবা
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="calc">
        <div className="row  px-0">
          <div className="col-md-3 col-6 calc-data">
            <div className="row py-4 pl-3">
              <div
                style={{ fontSize: "2rem", color: "#B5D5A0" }}
                className="col-3 my-auto mr-2 mr-md-0"
              >
                <FaReact />
              </div>
              <div className="col-md-8 col-6 text-left my-auto pl-3 pl-md-0">
                <span
                  style={{
                    cursor: "pointer",
                    color: "#673290",
                    fontWeight: "550",
                  }}
                >
                  মোট সেবা
                </span>
                <br />
                <span
                  style={{
                    cursor: "pointer",
                    color: "#182D8D",
                    fontWeight: "600",
                  }}
                >
                  ৪১৫
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 calc-data">
            <div className="row py-4">
              <div
                style={{ fontSize: "2rem", color: "#673290" }}
                className="col-3 my-auto mr-1 mr-md-0 "
              >
                <BsPeople />
              </div>
              <div className="col-md-9 col-6 text-left my-auto pl-md-0 pl-3">
                <span style={{ color: "#673290", fontWeight: "550" }}>
                  নিবন্ধিত সদস্য
                </span>
                <br />
                <span style={{ color: "#182D8D", fontWeight: "600" }}>
                  ৩২২৩৯৯০
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 calc-data">
            <div className="row py-4 pl-3">
              <div
                style={{ fontSize: "2rem", color: "#a9d68a" }}
                className="col-3 my-auto mr-2 mr-md-0"
              >
                <BsCalendar />
              </div>
              <div className="col-md-9 col-6 text-left my-auto pl-3 pl-md-0">
                <span style={{ color: "#673290", fontWeight: "550" }}>
                  মোট দপ্তর
                </span>
                <br />
                <span style={{ color: "#182D8D", fontWeight: "600" }}>
                  ৮১৫৩
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 calc-data pl-3">
            <div className="row py-4">
              <div
                style={{ fontSize: "2rem", color: "#a9d68a" }}
                className="col-3 my-auto mr-2 mr-md-0"
              >
                <AiTwotoneFileUnknown />
              </div>
              <div className="col-md-9 col-6 text-left my-auto pl-md-0 pl-2">
                <span style={{ color: "#673290", fontWeight: "550" }}>
                  মোট আবেদন
                </span>
                <br />
                <span style={{ color: "#182D8D", fontWeight: "600" }}>
                  ২২৬৬০১৬
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Options />
    </>
  );
};

export default List;
