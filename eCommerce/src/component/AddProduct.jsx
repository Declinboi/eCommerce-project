import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/products/action";
const AddProduct = () => {
  const dispatch = useDispatch;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    dispatch(addProduct(data));
  };
  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Products</h4>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-white">
        <div className="space-y-2">
          <label> Product Name</label>
          <input
            {...register("name", { required: true })}
            placeholder="product name"
            type="name"
            name="name"
            id="text"
            className="w-full rounded border px-2 py-1 focus:outline focus:border-purple-400"
          />
        </div>
        {/* category */}
        <div className="space-y-2">
          <label> Category</label>
          <select
            name="category"
            id="category"
            className="w-full rounded-md border px-2 py-1 focus:outline-none focus:border-purple-400"
            {...register("category", { required: true })}
          >
            <option value="">select a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadget</option>
            <option value="bags">Bags</option>
          </select>
        </div>
        <div className="space-y-2">
          <label> Image URL</label>
          <input
            {...register("url", { required: true })}
            type="url"
            name="url"
            id="url"
            placeholder="www.example.com"
            className="w-full rounded border px-2 py-1 focus:outline focus:border-purple-400"
          />
        </div>
        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label> Price </label>
            <input
              {...register("price", { required: true })}
              type="number"
              name="price"
              id="price"
              className="w-full rounded border px-2 py-1 focus:outline focus:border-purple-400"
              placeholder="$10.00"
            />
          </div>
          <div className="space-y-2">
            <label> Quantity </label>
            <input
              {...register("quantity", { required: true })}
              type="number"
              name="quantity"
              id="quantity"
              className="w-full rounded border px-2 py-1 focus:outline focus:border-purple-400"
              placeholder="$100.00"
            />
          </div>
        </div>

        <button
          type="submit"
          className="px-2 py-4 mt-1 block w-full bg-repeat bg-purple-600 text-white rounded-md"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
