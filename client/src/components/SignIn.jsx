import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
import {signInStart,signInSuccess,signInFailure} from '../redux/user/userSlice'
import OAuth from "./OAuth";
function SignIn() {
  const dispatch = useDispatch()
  
  const [formData,setFormData] = useState({})
// const {loading,error} = useSelector(state=>state.user)  
const navigate = useNavigate()
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value
    })
  }



  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart())
      
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Sign in failed");
      }
  
      const data = await res.json();
  
      // Display success message from server response
      toast.success(data.message || "Sign in successful!");
      setFormData({});
     dispatch(signInSuccess(data))
      navigate('/')
    } catch (error) {
      // Display error message from server response or default message
      toast.error(error.message || "Sign up failed. Please try again.");
  
      dispatch(signInFailure(error))
    }
  };



  return (
    <div className=" flex justify-center items-center">
      <div className="mt-[50px]">
        <form onSubmit={handleSubmit} className="form">
          <div className="flex-column">
            <label>Email </label>
          </div>
          <div className="inputForm">
            <svg
              height={20}
              viewBox="0 0 32 32"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Layer_3" data-name="Layer 3">
                <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
              </g>
            </svg>
            <input
            id="email"
            name="email"
              type="email"
              className="input"
              onChange={handleChange}
              placeholder="Enter your Email"
              value={formData.email || ''}
            />
          </div>
          <div className="flex-column">
            <label>Password </label>
          </div>
          <div className="inputForm">
            <svg
              height={20}
              viewBox="-64 0 512 512"
              width={20}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
              <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
            </svg>
            <input
             onChange={handleChange}
              type="password"
              className="input"
              placeholder="Enter your Password"
              id="password"
              name="password"
              value={formData.password || ''}
            />
            <svg
              viewBox="0 0 576 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>
          </div>
          <div className="flex-row">
            <div>
              <input type="checkbox" />
              <label>Remember me </label>
            </div>
            <span className="span">Forgot password?</span>
          </div>
          <button className="button-submit">Sign In</button>
          <p className="p">
            Do not have an account?{" "}
            <span className="span">
              <Link to="/sign-up">Sign Up</Link>
            </span>
          </p>
          <p className="p line">Or</p>
        <OAuth/>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
