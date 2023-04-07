import React, { useEffect, useState } from "react";
import Input from "../../components/FARMER/Input";
import Button from "../../components/FARMER/button";
import { useNavigate } from "react-router-dom";

import { useUserAuth } from "../../context/auth";
import { checkBvn } from "../../api";

function BuyerBioData() {
  const navigate = useNavigate();
  const [isdisabled, setIsdisabled] = useState(true);
  const [isFormfilled, setIsFormFilled] = useState(true);
  const [errors, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

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
      FormData.phoneNumber &&
      FormData.gender
    ) {
      setIsFormFilled(false);
      return;
    } else {
      setIsFormFilled(true);
      return;
    }
  }, [FormData]);
  

  const { tempUser, setTemporaryUserData } = useUserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !FormData.name ||
      !FormData.surname ||
      !FormData.middleName ||
      !FormData.phoneNumber ||
      !FormData.gender
    ) {
      alert("Please fill all fields");
      return;
    } else navigate("/buyer/address");
  };

  const handleOnChangeBVN = async (e) => {
    const bvnInput = e.target.value;

    setIsLoading(true);
    setFormData({ ...FormData, bvn: bvnInput });

    if (FormData.bvn.length === 11) {
      const data = {
        firstName: FormData.name,
        lastName: FormData.surname,
        middleName: FormData.middleName,
        gender: FormData.gender,
        bvn: bvnInput,
      };
      console.log("run query");
      try {
        const response = await checkBvn(data);
        console.log(response);
        setTemporaryUserData(data)
        setIsdisabled(false);
        setIsLoading(false);
        return;
      } catch ({ response }) {
        const { data } = response;
        console.log(data.message);
        console.log(data.status);
        
        
        setIsLoading(false);
          setError(data.message)
          if (!bvnInput) {
          setIsLoading(false);
          setError(" ")
        }
        console.log(errors);
        return;
      }
      // if (response) setIsdisabled(false)
    }
      if(bvnInput !== 11){
        setError('')
      }
      if (!bvnInput) {
        setIsLoading(false);
        setError('please fill the field')
      }
    
  };
  

  return (
    <div className="py-10 font-bold h-full flex justify-center">
      <form onSubmit={handleSubmit} className="m-auto max-w-[800px] px-10">
        <h1 className="text-primary font-bold my-5 text-xl">BioData</h1>
        <div className=" mx-auto my-10">
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
            value={tempUser ? tempUser.email : FormData.email}
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
          <div className="flex py-5 items-center px-5 gap-5 text-slate-600 ">
            <label className="flex gap-5 items-center " htmlFor="gender">
              Male
              <input
                type="radio"
                checked={FormData.gender === "male"}
                onChange={(e) =>
                  setFormData({ ...FormData, gender: e.target.value })
                }
                value="male"
              />
            </label>
            <label className="flex gap-5 items-center">
              Female
              <input
                type="radio"
                checked={FormData.gender === "female"}
                onChange={(e) =>
                  setFormData({ ...FormData, gender: e.target.value })
                }
                value="female"
              />
            </label>
          </div>
          <Input
            type="number"
            placeholder="Bank Verification Number (BVN)"
            value={FormData.bvn}
            name="bvn"
            onChange={handleOnChangeBVN}

            disabled={isFormfilled}
          
          />
          <p className="text-red-600"> {errors} </p>
          {isloading && (
            <div class=" flex justify-center items-center">
              <div class="spinner"></div>
            </div>
          )}
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
