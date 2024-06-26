import React, {useState} from "react";
// use state -> 동적값(변하는) 사용할 때 사용

const Input2 = () => {
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        tel: ""
    });
    
    const {name, email, tel} = inputs;

const onChange = (e) => {
    const value = e.target.value;
    const id = e.target.id;

    // inputs[id] = value; -> 값 변동시 인식 못함
    setInputs({
        ...inputs,
        // 위 inputs = >
        // name: "",
        // email: "",
        // tel: ""
        
        // name: value
        [id]: value
    })
}
    return (
        <div>
            <div>
                <label>이름</label>
                <input type="text" id='name' value={name} onChange={onChange}/>
            </div>
            <div>
                <label>이메일</label>
                <input type="email" id='email' value={email} onChange={onChange}/>
            </div>
            <div>
                <label>전화번호</label>
                <input type="tel" id='tel' value={tel} onChange={onChange}/>
            </div>

{/* 
            <input type="text" value={txtValue} onChange={onChange} />
            <br />
            
            화면에 입력 값 표시*/}
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>전화번호: {tel}</p>
        </div>
    )
}

export default Input2;
