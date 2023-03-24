import React, { useState } from "react";
import EModal from "../../../modal/EModal";
import EachNotification from "./EachNotification";

export default function Notification() {
  const [showModal, setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
    setClicked(true);
  };
  const closeModal = (event) => {
    if (!event.target.closest(".emodal")) {
      setShowModal(false);
    }
  };
  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold text-primary"> Today </h1>
      </div>
      <div className="flex items-center gap-5 flex-col w-full">
        {[...Array(2)].map((_, i) => {
          return (
            <div  key={i} className="flex items-center gap-5 flex-col w-full ">
                      <div   className="flex items-center gap-5 flex-col w-full">
        <h1 className="text-primary w-[500px] text-start py-5 text-3xl font-bold">
          {" "}
          21.08.2022{" "}
        </h1>
      </div>
              <button onClick={handleModal} className="w-[500px]">
                <div className="flex items-center  gap-10">
                  {" "}
                  <div className="w-10 h-10 rounded-full bg-primary">
                    {" "}
                  </div>{" "}
                  <p className={`${clicked? 'text-primary ': 'font-bold text-primary'} `}>
                    {" "}
                    Rita Ogbu, just has received your order
                  </p>{" "}
                  <span className="text-slate-500"> 4:23PM</span>{" "}
                </div>{" "}
              </button>
              <button onClick={handleModal} className="w-[500px]">
                <div className="flex  items-center  gap-10">
                  {" "}
                  <div className="w-10 h-10 rounded-full bg-primary">
                    {" "}
                  </div>{" "}
                  <p className={`${clicked? 'text-primary ': 'font-bold text-primary'} `}>
                    {" "}
                    Poultry news article................{" "}
                  </p>{" "}
                  <span className="text-slate-500"> 7:22AM</span>{" "}
                </div>{" "}
              </button>
              <button onClick={handleModal} className="w-[500px]">
                <div className="flex items-center  gap-10">
                  {" "}
                  <div className="w-10 h-10 rounded-full bg-primary">
                    {" "}
                  </div>{" "}
                  <p className={`${clicked? 'text-primary ': 'font-bold text-primary'} `}>
                    {" "}
                    Payment deductd from your..........{" "}
                  </p>{" "}
                  <span className="text-slate-500"> 9:13PM</span>{" "}
                </div>{" "}
              </button>
            </div>
          );
        })}
      </div>

      
        {showModal && (
          <div
            className={` z-10 fixed bg-modal left-0 top-0 h-screen  w-full  `}
          onClick={closeModal}
         >
            <div className=".emodal">
              <EModal modalProps={<EachNotification />} />
            </div>
          </div>
        )}

    </div>
  );
}
