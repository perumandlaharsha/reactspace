import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signupform() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullname: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState("");

  const formValidate = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[A-Z][a-z]{2,25}$/.test(formData.fullname)) {
      errors.fullNameError = "Min 3 characters required";
    }

    if (!/^[6-9][0-9]{9}$/.test(formData.mobileNumber)) {
      errors.mobileNumberError = "Mobile Number must be 10 digits";
    }

    if (!/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}$/.test(formData.password)) {
      errors.passwordError =
        "Password must contain 6+ characters including uppercase, lowercase, and number";
    }

    if (formData.password !== formData.confirmPassword) {
      errors.confirmPasswordError = "Passwords do not match";
    }

    return errors;
  };

  function submitForm(e) {
    e.preventDefault();
    const validateErrors = validateForm();
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      console.log("Submission Success", formData);
      setTimeout(() => {
        navigate("/team");
      }, 1000);
    } else {
      console.log("Error", validateErrors);
    }
  }

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-md bg-white shadow-2xl rounded-xl p-8 space-y-5 border border-gray-200"
        onSubmit={submitForm}
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">
          Create Account
        </h2>

        {/* Full Name */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullname"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter your full name"
            value={formData.fullname}
            onChange={formValidate}
          />
          {errors.fullNameError && (
            <p className="text-red-600 text-sm mt-1">{errors.fullNameError}</p>
          )}
        </div>

        {/* Mobile Number */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Mobile Number
          </label>
          <input
            type="text"
            name="mobileNumber"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={formValidate}
          />
          {errors.mobileNumberError && (
            <p className="text-red-600 text-sm mt-1">
              {errors.mobileNumberError}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Enter password"
            value={formData.password}
            onChange={formValidate}
          />
          {errors.passwordError && (
            <p className="text-red-600 text-sm mt-1">{errors.passwordError}</p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Re-enter password"
            value={formData.confirmPassword}
            onChange={formValidate}
          />
          {errors.confirmPasswordError && (
            <p className="text-red-600 text-sm mt-1">
              {errors.confirmPasswordError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-md"
        >
          Register
        </button>
      </form>
    </div>
  );
}