import React, { useEffect, useState } from "react";
import Input from "../../components/FARMER/Input";
import Button from "../../components/FARMER/button";
import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/auth";
// import { FormController } from 'form-controller-lite'
import { checkBvn } from "../../api";

function BuyerBioData() {
  const navigate = useNavigate();
  const [isdisabled, setIsdisabled] = useState(true);
  const [isFormfilled, setIsFormFilled] = useState(true);

  const [FormData, setFormData] = useState({
    name: "",
    surname: "",
    middleName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    bvn: "",
  });

  useEffect(() => {
    if (
      FormData.name &&
      FormData.surname &&
      FormData.middleName &&
      FormData.email &&
      FormData.phoneNumber &&
      FormData.gender
    ) {
       setIsFormFilled(false);
    } else {
      setIsFormFilled(true);
    }
  }, [FormData]);

  const { tempUser } = useUserAuth();
  console.log(tempUser);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !FormData.name ||
      !FormData.surname ||
      !FormData.middleName ||
      !FormData.email ||
      !FormData.phoneNumber ||
      !FormData.gender
    ) {
      alert("Please fill all fields");
      return;
    } else navigate("/buyer/address");

    // console.log(values, e)
  };
  const handleOnChangeBVN = async (e) => {
    const bvnInput = e.target.value;
    setFormData({ ...FormData, bvn: bvnInput });

    // console.log(e.target.value)
    const data = {
      firstName: FormData.name,
      lastName: FormData.surname,
      middleName: FormData.middleName,
      gender: FormData,
      bvn: FormData.bvn,
    };
    if (bvnInput.length === 10) {
      console.log("run query");
      const response = await checkBvn(data);
      console.log(response);
      setIsdisabled(false);
    }
  };

  return (
    <div className="py-10 font-bold h-full flex justify-center">
      <form
        onSubmit={handleSubmit}
        clearAfterSubmit={false}
        className="m-auto max-w-[800px] px-10"
      >
        <h1 className="text-primary font-bold my-5 text-xl">BioData</h1>
        <div className=" mx-auto my-10">
          {/* <FormController
						onSubmit={handleSubmit}
						clearAfterSubmit={false}
					> */}
          <Input
            type="text"
            placeholder="Name"
            value={FormData.name}
            name="name"
            onChange={(e) => setFormData({ ...FormData, name: e.target.value })}
          />
          <Input
            type="text"
            placeholder="Surname"
            value={FormData.surname}
            name="surname"
            onChange={(e) =>
              setFormData({ ...FormData, surname: e.target.value })
            }
          />
          <Input
            type="text"
            placeholder="middle name"
            value={FormData.middleName}
            name="middleName"
            onChange={(e) =>
              setFormData({ ...FormData, middleName: e.target.value })
            }
          />

          <Input
            type="email"
            placeholder="Email"
            // value={tempUser ? tempUser.email : ""}
            value={FormData.email}
            onChange={(e) =>
              setFormData({ ...FormData, email: e.target.value })
            }
            name="email"
          />
          <Input
            type="tel"
            placeholder="Phone Number"
            name="phoneNumber"
            value={FormData.phoneNumber}
            onChange={(e) =>
              setFormData({ ...FormData, phoneNumber: e.target.value })
            }
          />
          <div className="flex items-center px-5 gap-5 text-slate-600 ">
            <label
              checked={FormData.gender === "male"}
              onChange={(e) =>
                setFormData({ ...FormData, gender: e.target.value })
              }
              className="flex gap-5 items-center "
              htmlFor="gender"
            >
              {" "}
              Male
              <input type="radio" name="gender" value={FormData.gender} />
            </label>
            <label
              className="flex gap-5 items-center"
              checked={FormData.gender === "female"}
              onChange={(e) =>
                setFormData({ ...FormData, gender: e.target.value })
              }
            >
              {" "}
              Female
              <input
                type="radio"
                name="gender"
                value={FormData.gender}
                label="female"
              />
            </label>
          </div>
          <Input
            type="number"
            placeholder="Bank Verification Number (BVN)"
            value={FormData.bvn}
            name="bvn"
            onChange={handleOnChangeBVN}
            isDisabled={isFormfilled}
          />
          {/* </FormController> */}
        </div>
        <div className="flex justify-center">
          <Button
            title="Continue"
            icon={true}
            color={`${isdisabled} ? 'green-200': 'fade' `}
            isdisabled={isdisabled}

            // action={handleSubmit}
            // action={() => navigate("/buyer/address")}
          />
        </div>
      </form>
    </div>
  );
}

export default BuyerBioData;
