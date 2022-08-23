import React, { useRef } from 'react';

function Form(props) {

    const nameRef = useRef()
    const emailRef = useRef();
    const phoneRef = useRef();  

    const name = () => {
        console.log(nameRef.current.value, emailRef.current.value, phoneRef.current.value);
        nameRef.current.style.backgroundColor = 'black';
        emailRef.current.focus();
    }
    return (
        <div>
			<input className='mt-4' ref={nameRef} type="text" name="name" placeholder="Enter your first name"/><br/>
			<input className='mt-4' ref={emailRef} type="email" name="email"  placeholder="Enter your Email ID"/><br/>
			<input className='mt-4' ref={phoneRef} type="tel"  name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{3}" placeholder="123-4567-890"/><br/>
			
            <button className='m-4' onClick={() => name()}>Submit</button>
        
        </div>
    );
}

export default Form;