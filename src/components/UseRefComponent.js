import { useRef } from "react";
export function UseRefComponent() {
    const emailRef = useRef(null);
    const phoneNumberRef = useRef(null);
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const referralRef = useRef(null);
    const passwordRef = useRef(null);
  
    const onSubmit = (event) => {
      alert(
        `Current values of the form ${emailRef.current.value}, ${phoneNumberRef.current.value}, ${firstNameRef.current.value}, ${lastNameRef.current.value}, ${referralRef.current.value}, ${passwordRef.current.value}`
      );
      event.preventDefault();
    };
  
    return (

        <center>
            <form onSubmit={onSubmit} autoComplete='off'>
                <h3>User Details</h3>
        {/* register our input field with register function provided by the useForm hook */}
        <input className="mt-1" placeholder="Enter email" ref={emailRef} /><br/>
        <input className="mt-1" placeholder="Enter phone number" ref={phoneNumberRef} /><br/>
        <input className="mt-1" placeholder="Enter first name" ref={firstNameRef} /><br/>
        <input className="mt-1" placeholder="Enter last name" ref={lastNameRef} /><br/>
        <input className="mt-1" placeholder="Enter referral" ref={referralRef} /><br/>
        <input className="mt-1"
          placeholder="Enter your password"
          type={"password"}
          ref={passwordRef}
        /><br/>
  
        <input className="mt-1 bg-primary" type="submit"  />
      </form>
        </center>
      
    );
  }