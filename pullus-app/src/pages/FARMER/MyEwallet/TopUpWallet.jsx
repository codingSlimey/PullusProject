import React from "react";
import Button from "../../../components/FARMER/button";

function TopUpWallet(props) {
  const amt = [
    { id: 1, amount: "N1,000" },
    { id: 2, amount: "N2,000" },
    { id: 3, amount: "N5,000" },
    { id: 4, amount: "N10,000" },
    { id: 5, amount: "N20,000" },
    { id: 6, amount: "N50,000" },
    { id: 7, amount: "N100,000" },
    { id: 8, amount: "N200,000" },
    { id: 9, amount: "N500,000" },
  ];
  const [amount, setAmount] = React.useState("N5,000");
  const handleChange = (e) => {
    // setAmount("")
    setAmount(e.target.value);
  };
  return (
    <div>
        <div>
        <h1 className="text-primary font-bold text-2xl">
          Top Up wallet{" "}
        </h1>
        <hr />
      </div>
      <div>
        <p className="text-primary py-5"> Enter the amount of top up </p>
        <input
          type="text"
          onChange={handleChange}
          value={`${amount}`}
          className="text-primary font-bold text-xl text-center border border-primary rounded-xl py-5"
        />
      </div>
      <div className="grid  mx-auto my-5 grid-cols-3 w-[60%]" >
        {amt.map((data) => {
          return (
            <div key={data.id} className="items-center gap-5 py-2">
              <input
                type="button"
                name="amount"
                value={data.amount}
                onClick={() => setAmount(data.amount)}
                className="text-primary rounded-full px-6 font-bold text-lg text-center border border-primary  py-5"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-center items-center " >
      <Button
        title=" Continue "
        color={`fade`}
        action={ props.action}
        />
      </div>
      
      
    </div>
  );
}

export default TopUpWallet;
