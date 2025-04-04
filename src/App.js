import { useEffect, useRef, useState } from "react";
import "./styles.css";

const Input_Digits = 5;
const App = () => {
  const [InputArr, setInputArr] = useState(new Array(Input_Digits).fill(""));
  const refArr = useRef([]);
  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);
  const handleOnChange = (data, index) => {
    if (isNaN(data)) return;
    const newArr = [...InputArr];
    // console.log(newArr);
    const NewValue = data.trim();
    newArr[index] = data.slice(-1);
    setInputArr(newArr);
    NewValue && refArr.current[index + 1]?.focus();
  };
  const handleDown = (e, index) => {
    if (!e.target.value && e.key === "Backspace") {
      refArr.current[index - 1]?.focus();
    }
  };
  return (
    <div className="App">
      <h2>Input Feild</h2>
      {InputArr.map((input, index) => {
        return (
          <input
            key={index}
            type="text"
            value={InputArr[index]}
            ref={(input) => (refArr.current[index] = input)}
            onChange={(e) => handleOnChange(e.target.value, index)}
            onKeyDown={(e) => handleDown(e, index)}
          />
        );
      })}
    </div>
  );
};
export default App;
