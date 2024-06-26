import React, {useState} from "react";
// use state -> 동적값(변하는) 사용할 때 사용

const Input = () => {
    const [txtValue, setTextValue] = useState("");
const onChange = (e) => {
    setTextValue(e.target.value);
};


    return (
        <div>
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            <p>{txtValue}</p>
        </div>
    )
}

export default Input;
