import React from "react";
import { useForm } from "react-hook-form";

const Orderform = () => {
  const {
    register,
    handleSubmit,
    reset, // ✅ Added reset
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset(); // ✅ Clears all input fields after submit
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-4">

      {/* Card */}
      <div
        className="w-full md:w-[90%] lg:w-[75%] xl:w-[65%] max-w-6xl p-6 md:p-10 lg:p-14 rounded-3xl bg-white/80 backdrop-blur-md border-2 border-[#ccc]"
        style={{ boxShadow: "0 8px 32px rgba(255, 165, 0, 0.1)",
          padding: "40px", borderRadius: "30px"
         }}
      >

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-600 mb-10">
          🛒 Place Your Order
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >

          {[ 
            { label: "Product Name", name: "productName", type: "text", required: true },
            { label: "Item Code", name: "itemCode", type: "text", required: true },
            { label: "Quantity", name: "quantity", type: "number", required: true },
            { label: "Cut Preference", name: "cut", type: "text", required: true },
            { label: "Price", name: "price", type: "number", required: true },
            { label: "Total Items", name: "totalItems", type: "number", required: true },
          ].map((field) => (
            <div key={field.name} className="flex flex-col">
              <label className="text-sm font-semibold text-gray-700 mb-1">
                {field.label}
              </label>
              <input
                type={field.type}
                {...register(field.name, {
                  required: field.required && `${field.label} is required`,
                })}
                className="
                  w-full px-4 py-2
                  rounded-xl
                  border-2 border-gray-400
                  bg-white
                  focus:border-orange-500
                  focus:ring-2 focus:ring-orange-200
                  outline-none
                  transition
                "
              />
              {errors[field.name] && (
                <p className="text-red-500 text-xs mt-1">{errors[field.name].message}</p>
              )}
            </div>
          ))}

          {/* GST Full Width */}
          <div className="md:col-span-3 flex flex-col">
            <label className="text-sm font-semibold text-gray-700 mb-1">
              GST (%)
            </label>
            <input
              type="number"
              {...register("gst", {
                required: "GST is required",
                min: { value: 0, message: "Invalid GST" },
              })}
              className="
                w-full px-4 py-2
                rounded-xl
                border-2 border-gray-400
                focus:border-orange-500
                outline-none
              "
            />
            {errors.gst && (
              <p className="text-red-500 text-xs mt-1">{errors.gst.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-center mt-1 mb-4">
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
              style={{ borderRadius: "30px", width: "150px", height: "60px" }}
            >
              Submit Order
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Orderform;
