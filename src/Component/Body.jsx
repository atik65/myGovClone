import React, { useState } from "react";
import PaniBill from "../Component/img/water-bill.png";
import ElectrictBill from "../Component/img/electricty-bill.png";
import GasBill from "../Component/img/gas-bill.png";
import TelephoneBill from "../Component/img/telephone-bill.png";
import Modal from "react-bootstrap/Modal";
import { AiOutlineClose } from "react-icons/ai";
import List from "../Component/List";

const Body = () => {
  let [modal, setModal] = useState(false);
  let ModalFunc = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="main-body">
        <div className="container bg">
          <div className="container">
            <div className="row bill">
              <div className="col-6 col-md-3">
                <span>
                  <img
                    onClick={ModalFunc}
                    className="bill-img"
                    src={PaniBill}
                    alt="waterTax"
                  />
                </span>
              </div>

              <div className="col-6 col-md-3">
                <span>
                  <img
                    onClick={ModalFunc}
                    className=" bill-img"
                    src={ElectrictBill}
                    alt="ElectrictTax"
                  />
                </span>
              </div>

              <div className="col-6 col-md-3">
                <span>
                  <img
                    onClick={ModalFunc}
                    className=" bill-img"
                    src={GasBill}
                    alt="GasTax"
                  />
                </span>
              </div>

              <div className="col-6 col-md-3">
                <span>
                  <img
                    onClick={ModalFunc}
                    className=" bill-img"
                    src={TelephoneBill}
                    alt="TelephoneTax"
                  />
                </span>

                <span>
                  <Modal onClick={ModalFunc} show={modal}>
                    <Modal.Header style={{ cursor: "pointer" }}>
                      <AiOutlineClose /> Clsoe
                    </Modal.Header>

                    <Modal.Body>বিল সেবা আপাতত বন্ধ আছে</Modal.Body>
                  </Modal>
                </span>
              </div>
            </div>
          </div>

          <div>
            <List />
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
