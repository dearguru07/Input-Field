import React, { useEffect, useRef, useState } from "react";

const Input_Digits = 5;
const NewApp = () => {
  const [OTP, setOTP] = useState(new Array(Input_Digits).fill(""));
  const refArr = useRef([]);
  const handlePage = (data, index) => {
    if (isNaN(data)) return;
    const newArr = [...OTP];
    newArr[index] = data.slice(-1);
    setOTP(newArr);
    refArr.current[index + 1]?.focus();
  };
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  return (
    <div className="App">
      <h3>OTP Validate</h3>
      {OTP.map((data, index) => {
        return (
          <input
            key={index}
            type="text"
            value={OTP[index]}
            onChange={(e) => {
              handlePage(e.target.value, index);
            }}
            ref={(inp) => (refArr.current[index] = inp)}
          />
        );
      })}
    </div>
  );
};
export default NewApp;
