import React from "react";
// import styles from './styles.module.css'
import chatIcon from "./icons/chatIcon.png";
import envelopeIcon from "./icons/envelopeIcon.png";
import Button from "../FARMER/button";
import EModal from "../../modal/EModal";
import ResetPassword from "./ResetPassword";

export default function ForgotPassword() {
  const [showModal, setShowModal] = React.useState(false);
  const handleModal = () => {
    setShowModal(!showModal);
  };
  const closeModal = (event) => {
    if (!event.target.closest(".emodal")) {
      setShowModal(false);
    }
  };
  return (
    <>
      <section className="  my-10 mx-auto flex items-center justify-center">
        <div className="">
          <div className="flex gap-5 flex-col mb-5">
            <h1 className="flex text-2xl text-primary font-bold items-start">
              Forgot Password
            </h1>
            <p className=" text-sm text-primary flex items-start">
              How would you like to use to reset password?
            </p>
          </div>
          <div className="border  border-primary hover:bg-primary hover:text-white gap-4 text-primary rounded-lg flex py-3 px-3 md:w-[400px]">
            <div className=" bg-slate-200 p-3 rounded-full  ">
              <img src={chatIcon} alt="Chat Icon" className="" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <span>via SMS</span>
              <p>+234 *** *** **94</p>
            </div>
          </div>
          <div className=" border border-primary gap-4 my-6 hover:bg-primary hover:text-white text-primary rounded-lg flex py-3 px-3 md:w-[400px]">
            <div className="bg-slate-200 p-3 rounded-full">
              <img src={envelopeIcon} alt="Envelope Icon" className="" />
            </div>
            <div className="flex flex-col items-start justify-start">
              <span>via Email</span>
              <p>Br******@outlook.com</p>
            </div>
          </div>
          {showModal && (
            <div
              className={` z-10 fixed bg-modal left-0 top-0 h-screen  w-full  `}
              onClick={closeModal}
            >
              <div className="emodal">
                <EModal modalProps={<ResetPassword />} />
              </div>
            </div>
          )}
          <div className=" my-10 -mx-10">
            <Button
              action={handleModal}
              color={"fade"}
              title={"Continue"}
              extraClass={
                "font-bold text-xl text-center w-full  justify-center items-center"
              }
            />
          </div>
        </div>
      </section>
    </>
  );
}
