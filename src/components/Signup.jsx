import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Signup() {
  const [userType, setUserType] = useState('client');
  const { register, handleSubmit, formState: { errors } } = useForm({
    shouldUnregister: true  // Important for conditionally shown inputs
  });

  const onSubmit = async (data) => {
  try {
    let endpoint = '';
    let payload = {};

    if (userType === 'client') {
      endpoint = 'https://vakil-backend.onrender.com/api/client/signup';

      payload = {
  aadharNumber: data.aadhaarNumber,
  contactNumber: data.contactNumber,
  password: data.password,
  confirmPassword: data.confirmPassword
};

    } else {
      endpoint = 'https://vakil-backend.onrender.com/api/lawyer/signup';

      payload = {
        councilId: data.councilId,
        contactNumber: data.contactNumber,
        password: data.password,
        confirmPassword: data.confirmPassword
      };
    }

    console.log("Sending to:", endpoint);
    console.log("Payload:", payload);

    const res = await axios.post(endpoint, payload);
    alert(res.data.message);
    document.getElementById("signup_modal").close();

  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Signup failed');
  }
};



  return (
    <div>
      <dialog id="signup_modal" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-4">Sign Up</h3>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* User Type Selection */}
            <div>
              <label className="block text-sm font-medium">Are you a Lawyer or Client?</label>
              <select
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
                className="w-full mt-1 px-3 py-2 border rounded-md"
              >
                <option value="client">Client</option>
                <option value="lawyer">Lawyer</option>
              </select>
            </div>

            {/* Aadhaar / Council ID */}
            {userType === 'lawyer' ? (
            //   <div>
            //     <label className="block text-sm font-medium">Aadhaar Number</label>
            //     <input
            //     type='text'
            //       {...register("aadhaarNumber", { required: true })}
            //       placeholder="Enter Aadhaar Number"
            //       className="w-full mt-1 px-3 py-2 border rounded-md"
            //     />
            //     {errors.aadhaarNumber && <p className="text-red-500 text-sm">Required</p>}
            //   </div>
            <div>
                <label className="block text-sm font-medium">Bar Council ID</label>
                <input
                type='text'
                  {...register("councilId", { required: true })}
                  placeholder="Enter Council ID"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
                {errors.councilId && <p className="text-red-500 text-sm">Required</p>}
              </div>
            ) : (
            //   <div>
            //     <label className="block text-sm font-medium">Bar Council ID</label>
            //     <input
            //     type='text'
            //       {...register("councilId", { required: true })}
            //       placeholder="Enter Council ID"
            //       className="w-full mt-1 px-3 py-2 border rounded-md"
            //     />
            //     {errors.councilId && <p className="text-red-500 text-sm">Required</p>}
            //   </div>
              <div>
                <label className="block text-sm font-medium">Aadhaar Number</label>
                <input
                type='text'
                  {...register("aadhaarNumber", { required: true })}
                  placeholder="Enter Aadhaar Number"
                  className="w-full mt-1 px-3 py-2 border rounded-md"
                />
                {errors.aadhaarNumber && <p className="text-red-500 text-sm">Required</p>}
              </div>
            )}

            {/* Contact Number */}
            <div>
              <label className="block text-sm font-medium">Contact Number</label>
              <input
              type='text'
                {...register("contactNumber", { required: true })}
                placeholder="Enter Contact Number"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              {errors.contactNumber && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Enter Password"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              {errors.password && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium">Confirm Password</label>
              <input
                type="password"
                {...register("confirmPassword", { required: true })}
                placeholder="Confirm Password"
                className="w-full mt-1 px-3 py-2 border rounded-md"
              />
              {errors.confirmPassword && <p className="text-red-500 text-sm">Required</p>}
            </div>

            {/* Buttons */}
            <div className="modal-action flex justify-between items-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-800"
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => document.getElementById("signup_modal").close()}
                className="btn"
              >
                Close
              </button>
            </div>

            {/* Redirect to Login */}
            <p className="text-sm mt-4">
              Already have an account?{" "}
              <span
                onClick={() => {
                  document.getElementById("signup_modal").close();
                  document.getElementById("my_modal_1").showModal();
                }}
                className="underline text-blue-600 cursor-pointer"
              >
                Login here
              </span>
            </p>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Signup;
