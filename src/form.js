import './App.css';

import React, { useEffect, useState } from 'react';

function Form({label, callback}) {
    let [a, setA] = useState(null)
    const [b, setB] = useState()
    const [sum, setSum] = useState()

    useEffect(()=>{
    },[])

    
    useEffect(()=>{
        console.log("A is changed")
    },[a])

    useEffect(()=>{
        console.log("B is changed")
    },[b])

    
    if(a=== null) {
        return <loadingComponent />
    }
    
    const onChangeA = (e) => {
        setA(e.target.value)
    }

    const onChangeB = (e) => {
        setB(e.target.value)
    }

    const calculate = () =>{
        setSum(+a + +b)
    }

    // const callbackText = callback()
    return (
        <>
        {/* {label} 
        {callbackText} */}
        
         a = <input  type="text" value={a} onChange={onChangeA}/>
         <br/>
         b = <input type="text" value={b} onChange={onChangeB} />
         <br/>
         sum = {sum}
         <br/>
         <button onClick={calculate}>calculate</button>
         <br/>
         <div className='input-style'>{a}</div>
        </>
    );
}

export default Form;