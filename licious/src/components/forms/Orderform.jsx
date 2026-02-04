import React from "react";
import { useForm } from "react-hook-form";

const Orderform = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 flex items-center justify-center p-6">

      {/* Card */}
      <div
        className="
          w-full md:w-[90%] lg:w-[75%] xl:w-[65%] max-w-6xl
          p-8 md:p-12 lg:p-14
          rounded-3xl
          bg-white/80 backdrop-blur-md
          border-2 border-[#ddd]
          shadow-xl
        "
        style={{
          boxShadow: "0 8px 32px rgba(255, 165, 0, 0.1)",
          borderRadius: "30px",
          padding: "40px",

        }}
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-orange-600 mb-10">
          🛒 Place Your Order
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-7 mt-10 mb-3"
        >

          {/* Product Name */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Product Name</label>
            <input
              type="text"
              {...register("productName", 
                { required: "Product name is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.productName && (
              <p className="text-red-500 text-xs mt-0" >{errors.productName.message}</p>
            )}
          </div>

          {/* Item Code */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Item Code</label>
            <input
              type="text"
              {...register("itemCode", 
                { required: "Item code is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.itemCode && (
              <p className="text-red-500 text-xs mt-1">{errors.itemCode.message}</p>
            )}
          </div>

          {/* Quantity */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Quantity</label>
            <input
              type="number"
              {...register("quantity", 
                { required: "Quantity is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.quantity && (
              <p className="text-red-500 text-xs mt-1">{errors.quantity.message}</p>
            )}
          </div>

          {/* Cut Preference */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Cut Preference</label>
            <input
              type="text"
              {...register("cut", 
                { required: "Cut preference is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.cut && (
              <p className="text-red-500 text-xs mt-0.5">{errors.cut.message}</p>
            )}
          </div>

          {/* Price */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Price</label>
            <input
              type="number"
              {...register("price", 
                { required: "Price is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.price && (
              <p className="text-red-500 text-xs mt-0.5">{errors.price.message}</p>
            )}
          </div>

          {/* Total Items */}
          <div className="flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">Total Items</label>
            <input
              type="number"
              {...register("totalItems",
                 { required: "Total items is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.totalItems && (
              <p className="text-red-500 text-xs mt-0.5">{errors.totalItems.message}</p>
            )}
          </div>

          {/* GST Full Width */}
          <div className="md:col-span-1 flex flex-col space-y-1.5">
            <label className="text-sm font-semibold text-gray-700">GST (%)</label>
            <input
              type="number"
              {...register("gst", 
                { required: "GST is required" })}
              className="w-full px-4 py-2.5 rounded-xl border-2 border-gray-300 bg-white focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
              style={{
              marginBottom: "0px",
            }}
            />
            {errors.gst && (
              <p className="text-red-500 text-xs mt-0.5">{errors.gst.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <div className="md:col-span-3 flex justify-center mt-6 mb-3">
            <button
              type="submit"
              className="px-14 py-3 bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-full border-2 border-orange-700 shadow-md hover:shadow-xl transition-all duration-300"
              style={{
              marginBottom: "0px",
              marginTop: "0px",
            }}
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Orderform;
