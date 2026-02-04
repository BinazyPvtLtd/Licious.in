import React from "react";
import { useForm } from "react-hook-form";

const CustomerForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // Clears form after submission
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">
      {/* Card */}
      <div
        className="w-full md:w-[90%] lg:w-[75%] xl:w-[65%] max-w-6xl p-6 md:p-10 lg:p-14 rounded-3xl bg-white/80 backdrop-blur-md border-2 border-[#ccc]"
        style={{
          boxShadow: "0 8px 32px rgba(255, 165, 0, 0.1)",
          padding: "40px",
          borderRadius: "30px",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-600 mb-10">
          📝 Customer Information
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mt-2"
        >
          {/* Phone Number */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Phone Number
            </label>

            <input
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Enter a valid 10-digit phone number",
                },
              })}
              className="
                w-full px-4 py-2
                rounded-xl border-2 border-gray-400
                bg-white
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                outline-none
                transition
                m-0
              "
            />

            {errors.phone && (
              <p className="text-red-500 text-xs mt-1 m-0">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Email Address */}
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Email Address
            </label>

            <input
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Enter a valid email address",
                },
              })}
              className="
                w-full px-4 py-2
                rounded-xl border-2 border-gray-400
                bg-white
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                outline-none
                transition
                m-0
              "
            />

            {errors.email && (
              <p className="text-red-500 text-xs mt-1 m-0">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Delivery Address */}
          <div className="flex flex-col md:col-span-1">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Delivery Address
            </label>

            <textarea
              {...register("deliveryAddress", {
                required: "Delivery address is required",
                minLength: { value: 10, message: "Enter a valid address" },
              })}
              className="
                w-full px-4 py-2
                rounded-xl border-2 border-gray-400
                bg-white
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                outline-none
                transition
                resize-none
                m-0
              "
              rows={3}
            />

            {errors.deliveryAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.deliveryAddress.message}
              </p>
            )}
          </div>

          {/* Billing Address */}
          <div className="flex flex-col md:col-span-1">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              Billing Address
            </label>

            <textarea
              {...register("billingAddress", {
                required: "Billing address is required",
                minLength: { value: 10, message: "Enter a valid address" },
              })}
              className="
                w-full px-4 py-2
                rounded-xl border-2 border-gray-400
                bg-white
                focus:border-orange-500
                focus:ring-2 focus:ring-orange-200
                outline-none
                transition
                resize-none
                m-0
              "
              rows={3}
            />

            {errors.billingAddress && (
              <p className="text-red-500 text-xs mt-1">
                {errors.billingAddress.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-center mt-4 mb-4">
             <button
              type="submit"
              className="
                px-14 py-3
                bg-linear-to-r from-orange-500 to-orange-600
                hover:from-orange-600 hover:to-orange-700
                text-white font-semibold
                rounded-full
                border-2 border-orange-700
                shadow-md hover:shadow-xl
                transition-all duration-300
              "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerForm;
