import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
const navigate = useNavigate();
const { login } = useAuth(); // get login method from context

const onSubmit = async (data) => {
  try {
    const { userType, id, password } = data;

    const endpoint = userType === 'lawyer'
      ? 'https://vakil-backend.onrender.com/api/lawyer/login'
      : 'https://vakil-backend.onrender.com/api/client/login';

    const payload = userType === 'lawyer'
      ? { councilId: id, password }
      : { aadharNumber: id, password };

    const response = await axios.post(endpoint, payload);

    // Save token and userType
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userType', userType);

    login(userType); // update global auth context

    alert("Login successful!");
    document.getElementById("my_modal_1").close(); // close modal
    // No navigation here
  } catch (error) {
    const message = error.response?.data?.message || 'Login failed';
    alert(message);
  }
};

  const closeModal = () => {
    document.getElementById("my_modal_1").close();
  };

  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          
          {/* Wrap the fields inside a form */}
          <form onSubmit={handleSubmit(onSubmit)}>  
            {/* Select user type */}
            <div className='mt-4 space-y-2'>
              <span>Are you a Lawyer or Client?</span>
              <br/>
              <select className="px-3 py-2 border rounded-md" {...register("userType", { required: true })}>
                <option value="client">Client</option>
                <option value="lawyer">Lawyer</option>
              </select>
              {errors.userType && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            {/* Aadhar / Bar Council ID */}
            <div className='mt-4 space-y-2'>
              <span>Enter Aadhar (Client) / Bar Council ID (Lawyer)</span>
              <br/>
              <input
                type="text"
                placeholder='Enter your ID'
                className='mt-4 px-3 py-2 border rounded-md'
                {...register("id", { required: true })}
              />
              {errors.id && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            
            {/* Password */}
            <div className='mt-4 space-y-2'>
              <span>Password</span>
              <br/>
              <input
                type="password"
                placeholder='Enter your password'
                className="px-2 py-2 mt-2 border rounded-md"
                {...register("password", { required: true })}
              />
              {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>

            <div className='mt-6 text-sm'>
  <span>Don't have an account? </span>
  <span
    className='underline text-blue-500 cursor-pointer'
    onClick={() => {
      document.getElementById("my_modal_1").close();      // close login
      document.getElementById("signup_modal").showModal(); // open unified signup
    }}
  >
    Sign Up here
  </span>
</div>

            {/* Buttons */}
            <div className="modal-action mt-10 flex justify-around">
              <button type="submit" className='bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200'>
                Login
              </button>
              <div>
              <button type="button" onClick={closeModal} className="btn px-3 py-2">Close</button>
              </div>
                
              
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
